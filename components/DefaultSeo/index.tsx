import { DefaultSeoConfig, DefaultJsonLdConfig } from "@/config/seo";
import { NextSeo, BlogJsonLd } from "next-seo";

export default function DefaultSeo() {
  return (
    <>
      <NextSeo {...DefaultSeoConfig} />
      <BlogJsonLd {...DefaultJsonLdConfig} />
    </>
  );
}
