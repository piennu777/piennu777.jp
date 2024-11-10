import { Metadata } from 'next'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import { getPostBySlug, getAllPosts } from '../../../../lib/posts'
import { formatDate } from '../../../../lib/dateFormat'

import '@/assets/css/hello.css'
import '@/assets/css/profile.css'
import '@/assets/css/blog/post.css'
import '@/assets/css/projects.css'

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return {
            title: 'Post Not Found / PIENNU',
            description: 'This post is not available.',
            openGraph: {
                title: 'Post Not Found',
                description: 'This post is not available.',
                url: '',
                siteName: 'PIENNU',
                locale: 'ja-JP',
                type: 'website',
                images: '/ogp.webp',
            },
            icons: '/favicon.png"',
            verification: {
                google: ''
            },
            publisher: '@piennu_777',
            robots: 'index, follow',
            creator: '@piennu_777',
            keywords: ['PIENNU', 'piennu', 'ぴえんぬ', 'ピエンヌ', 'piennu777', 'piennu777.jp'],
        }
    }

    const description = post.excerpt ?? post.description ?? `${post.description}`
    const url = `https://www.piennu777.jp/${slug}`

    return {
        title: `${post.title} / PIENNU`,
        description: description,
        openGraph: {
            title: post.title,
            description: description,
            url: url,
            siteName: 'PIENNU',
            locale: 'ja-JP',
            type: 'website',
            images: '/ogp.webp',
        },
        icons: '/favicon.png"',
        verification: {
            google: ''
        },
        publisher: '@piennu_777',
        robots: 'index, follow',
        creator: '@piennu_777',
        keywords: ['PIENNU', 'piennu', 'ぴえんぬ', 'ピエンヌ', 'piennu777', 'piennu777.jp'],
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return (
            <main>
                <div className="not-found">
                    <i className="bi bi-cup-hot"></i>
                    <h1>Does not exist</h1>
                    <p>
                        このブログは削除されている、または存在していない可能性があります。
                        <br />
                        どうですか？コーヒーでもご一緒に。
                    </p>
                </div>
            </main>
        )
    }

    const processedContent = await remark().use(html).use(gfm).process(post.content)
    const contentHtml = processedContent.toString()

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
    )
}