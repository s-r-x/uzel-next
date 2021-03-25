import { EnvConfig } from "@/config/env";

type TLinkType = "root" | "post" | "tag" | "search";
type TCommonOptions = {
  isAbsolute?: boolean;
};
type TSinglePostOptions = TCommonOptions & { slug: string };
type TTagOptions = TCommonOptions & { slug: string };
type TSearchOptions = TCommonOptions & { term: string };

export abstract class LinkBuilder {
  public static build(type: "post", opts: TSinglePostOptions): string;
  public static build(type: "tag", opts: TTagOptions): string;
  public static build(type: "root", opts?: TCommonOptions): string;
  public static build(type: "search", opts: TSearchOptions): string;
  public static build(type: TLinkType, opts?: any) {
    let link: string;
    if (type === "root") {
      link = this.root();
    } else if (type === "post") {
      link = this.singlePost((opts as TSinglePostOptions).slug);
    } else if (type === "tag") {
      link = this.tag((opts as TTagOptions).slug);
    } else if (type === "search") {
      link = this.search((opts as TSearchOptions).term);
    }
    return opts?.isAbsolute ? this.prependSiteUrl(link) : link;
  }
  private static singlePost(slug: string) {
    return `/post/${slug}`;
  }
  private static tag(slug: string) {
    return `/tag/${slug}`;
  }
  private static search(term: string) {
    return `/search/${term}`;
  }
  private static prependSiteUrl(link: string) {
    return EnvConfig.siteUrl + link;
  }
  private static root() {
    return "/";
  }
}
