import Head from "next/head";

interface MetaData {
    pageTitle?: string;
    pageUrl?: string;
    pageOgImage?: string;
    noIndex?: boolean;
}

const Seo = ({ pageTitle, pageUrl, pageOgImage, noIndex = false }: MetaData) => {
    const defaultTitle = "NGC";
    const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
    const description = "名古屋でハイキャリアを目指すならNGC";
    const siteName = "NGC";
    const domain = "ngc.vercel.app";
    const url = pageUrl ? `https://${domain}/${pageUrl}/` : `https://${domain}`;
    const ogImage = pageOgImage || `https://${domain}/ogp.png`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content="ja_JP" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="viewport" content="width=device-width" />
            <meta name="format-detection" content="telephone=no" />
            {/* noIndex === true の場合のみ noindex 有効化 */}
            {noIndex && <meta name="robots" content="noindex" />}
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Head>
    );
};

export default Seo;
