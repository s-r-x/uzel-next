import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import { gqlClient } from "../../network/gqlClient";
import { GET_POST_BY_SLUG } from "../../network/queries/get-post-by-slug";

export default function PostPage({ post }) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <div>loading...</div>;
  }
  return <div>{post.title}</div>;
}

export const getStaticProps: GetStaticProps = async (props) => {
  const data = await gqlClient.request(GET_POST_BY_SLUG, {
    slug: props.params.slug,
  });
  return {
    props: data,
    revalidate: 30,
  };
};
export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
