import Head from "next/head";

interface MetaTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const MetaTags = ({ title, description, image, url }: MetaTagsProps) => (
  <Head>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:url" content={url} />
    <title>{title}</title>
  </Head>
);
