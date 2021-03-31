import { DefaultSeoConfig, DefaultJsonLdConfig } from "@/config/seo";
import { NextSeo, BlogJsonLd } from "next-seo";
import Head from "next/head";

export default function DefaultSeo() {
  return (
    <>
      <NextSeo {...DefaultSeoConfig} />
      <BlogJsonLd {...DefaultJsonLdConfig} />
      <Head>
        <link
          rel="preload"
          href="/fonts/Gilroy-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="/fonts/Gilroy-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
      </Head>
    </>
  );
}
