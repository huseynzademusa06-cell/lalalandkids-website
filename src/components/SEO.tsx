import type { ReactNode } from "react";
import { Head } from "vite-react-ssg";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  children?: ReactNode;
};

const SITE_URL = "https://lalalandkids.care";
const DEFAULT_IMAGE = `${SITE_URL}/assets/logo.jpg`;

export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  children,
}: SEOProps) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {children}
    </Head>
  );
}
