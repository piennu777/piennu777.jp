import { getPostBySlug, getAllPosts } from '../../../../lib/posts';
import { formatDate } from '../../../../lib/dateFormat';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

import '@/assets/css/hello.css';
import '@/assets/css/profile.css';
import '@/assets/css/blog/post.css';
import '@/assets/css/projects.css';

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return <main><div className="not-found"><i className="bi bi-cup-hot"></i><h1>Does not exist</h1><p>このブログは削除されている、または存在していない可能性があります。<br />どうですか？コーヒーでもご一緒に。</p></div></main>;
    }

    const processedContent = await remark()
        .use(html)
        .use(gfm)
        .process(post.content);

    const contentHtml = processedContent.toString();

    return (
        <main>
            <article>
                <div className="blog">
                    <div className="title">
                        <p>{formatDate(post.date)}</p>
                        <h1>{post.title}</h1>
                    </div>
                    <div className="content">
                        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    </div>
                </div>
            </article>
        </main>
    );
}

export default BlogPost;