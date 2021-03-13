import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import PostScreen from "_s/post";
import { Requests } from "@/network/requests";
import { GetPostBySlugQuery } from "@/typings/wp";

type TProps = {
  data: GetPostBySlugQuery;
};
export default function PostPage({ data }: TProps) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <div>loading...</div>;
  }
  return <PostScreen data={data} />;
}

export const getStaticProps: GetStaticProps<TProps> = async (props) => {
  const data = await Requests.getPostBySlug({
    slug: props.params.slug as string,
  });
  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};
export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
