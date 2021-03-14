import { Requests } from "@/network/requests";
import Screen from "@/screens/posts-by-tag";
import { GetPostsByTagQuery } from "@/typings/wp";
import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";

type TProps = {
  data: GetPostsByTagQuery;
  tag: string;
};
export default function TagPage(props: TProps) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <div>loading...</div>;
  }
  return <Screen tag={props.tag} data={props.data} />;
}

export const getStaticProps: GetStaticProps<TProps> = async (props) => {
  const tag = props.params.slug as string;
  const data = await Requests.getPostsByTag({
    tag,
  });
  return Promise.resolve({
    props: { data, tag },
    revalidate: 120,
  });
};

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
