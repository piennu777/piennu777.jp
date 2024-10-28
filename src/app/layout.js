import Head from 'next/head';

import styles from '../assets/css/main.css';

const url = "https://piennu777.jp/";
const icon = "/favicon.png";
const ogpIcon = "/ogp.webp";
const siteName = "PIENNU";
const description = "I am a student working as an engineer, doing web development and app development.";
export const metadata = {
  title: "PIENNU",
  description: "I am a student working as an engineer, doing web development and app development.",
	openGraph: {
		title: siteName,
		description,
		url,
		siteName,
		locale: "ja-JP",
		type: "website",
		images: ogpIcon
	},
	icons: icon,
	verification: {
		google: ""
	},
	publisher: `@piennu_777`,
	robots: "index, follow",
	creator: `@piennu_777`,
	keywords: ["PIENNU", "piennu", "ぴえんぬ", "ピエンヌ", "piennu777", "piennu777.jp"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <title>PIENNU</title>
        <meta name="keywords" content="PIENNU,piennu,ぴえんぬ,ピエンヌ,piennu777,piennu777.jp" />
        <meta name="description" content="" />
        <meta name="copyright" content="Copyright &copy; 2024 PIENNU. All rights reserved." />
        {/* OGP Meta Tags */}
        <meta property="og:title" content="About me" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://piennu777.jp/" />
        <meta property="og:image" content="https://www.piennu777.jp/ogp.webp" />
        <meta property="og:description" content="I am a student working as an engineer, doing web development and app development." />
        <meta property="og:site_name" content="piennu777.jp" />
        <meta property="og:locale" content="ja_JP" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="piennu777.jp" />
        <meta name="twitter:creator" content="@piennu777" />
        <meta name="twitter:title" content="About me" />
        <meta name="twitter:description" content="I am a student working as an engineer, doing web development and app development." />
        <meta name="twitter:image" content="https://www.piennu777.jp/ogp.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
