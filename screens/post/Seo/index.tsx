import { SeoConfig } from "@/config/seo";
import { LinkBuilder } from "@/services/link-builder";
import { GetPostBySlugQuery } from "@/typings/wp";
import { NextSeo, ArticleJsonLd } from "next-seo";

type TProps = {
  post: GetPostBySlugQuery["post"];
};
export default function SinglePostSeo({ post }: TProps) {
  const url = LinkBuilder.build("post", {
    isAbsolute: true,
    slug: post.slug,
  });
  return (
    <>
      <NextSeo
        title={post.title}
        openGraph={{
          url,
          locale: SeoConfig.locale,
          type: "article",
          title: post.title,
          article: {
            tags: post.tags.nodes.map((tag) => tag.name),
            publishedTime: post.date,
            modifiedTime: post.modified,
          },
          images: [
            {
              url: post.featuredImage.node.mediaItemUrl,
              width: post.featuredImage.node.mediaDetails.width,
              height: post.featuredImage.node.mediaDetails.height,
              alt: post.featuredImage.node.altText,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={url}
        title={post.title}
        datePublished={post.date}
        dateModified={post.modified}
        images={[post.featuredImage.node.mediaItemUrl]}
        authorName={SeoConfig.author}
        publisherName={SeoConfig.author}
        publisherLogo={SeoConfig.siteLogo}
        // TODO
        description="desc"
      />
    </>
  );
}
