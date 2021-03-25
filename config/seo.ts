import { BlogJsonLdProps, NextSeoProps } from "next-seo";
import { LinkBuilder } from "@/services/link-builder";

const title = "Узелковое письмо";
const description = "Фоторассказы о природе и путешествиях";
const locale = "ru";

export const SeoConfig = {
  author: "Струсь Татьяна",
  title,
  description,
  locale,
  siteUrl: LinkBuilder.build("root", { isAbsolute: true }),
  siteLogo:
    LinkBuilder.build("root", {
      isAbsolute: true,
    }) + "icons/icon-512x512.png",
};

export const DefaultSeoConfig: NextSeoProps = {
  title,
  description,
  twitter: {
    handle: "@strustatjana",
    site: "@strustatjana",
  },
  openGraph: {
    type: "website",
    title,
    url: SeoConfig.siteUrl,
    description,
    locale,
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content:
        "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover, minimal-ui",
    },

    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge; chrome=1",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "#5ccaa3",
    },
    {
      name: "apple-mobile-web-app-title",
      content: title,
    },
  ],
  additionalLinkTags: [
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};
export const DefaultJsonLdConfig: BlogJsonLdProps = {
  url: SeoConfig.siteUrl,
  images: [SeoConfig.siteLogo],
  datePublished: "",
  dateModified: "",
  title: SeoConfig.title,
  authorName: SeoConfig.author,
  description: SeoConfig.description,
};
