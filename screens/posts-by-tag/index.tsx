import Head from "next/head";
import GenericPosts from "@/components/GenericPosts";
import { GetPostsByTagQuery } from "@/typings/wp";
import { Requests } from "@/network/requests";
import { useCallback } from "react";

type TProps = {
  data: GetPostsByTagQuery;
  tag: string;
};
export default function PostsByTagScreen(props: TProps) {
  const key = `posts-by-tag-${props.tag}`;
  const loader = useCallback(
    ({ pageParam }: any) => {
      return Requests.getPostsByTag({
        after: pageParam,
        tag: props.tag,
      });
    },
    [props.tag]
  );
  return (
    <>
      <Head>
        <title>Поиск по метке {props.tag}</title>
      </Head>
      <GenericPosts initialData={props.data} uniqueKey={key} loader={loader} />
    </>
  );
}
