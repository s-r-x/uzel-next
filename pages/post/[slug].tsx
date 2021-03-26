import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import PostScreen from "_s/post";
import { Requests } from "@/network/requests";
import { GetPostBySlugQuery } from "@/typings/wp";
import SinglePostPlaceholder from "@/components/Placeholder/SinglePost";

type TProps = {
  data: GetPostBySlugQuery;
  slug: string;
};
export default function PostPage({ data, slug }: TProps) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <SinglePostPlaceholder width="100%" height="auto" />;
  }
  return <PostScreen slug={slug} data={data} />;
}

export const getStaticProps: GetStaticProps<TProps> = async (props) => {
  const slug = props.params.slug as string;
  const data = await Requests.getPostBySlug({
    slug,
  });
  return {
    props: {
      data,
      slug,
    },
    revalidate: 5,
  };
};
export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
