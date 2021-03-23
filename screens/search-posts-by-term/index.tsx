import Head from "next/head";
import GenericPosts from "@/components/GenericPosts";
import { SearchPostsByTermQuery } from "@/typings/wp";
import { Requests } from "@/network/requests";
import { useCallback } from "react";

type TProps = {
  data: SearchPostsByTermQuery;
  term: string;
};
export default function SearchPostsByTermScreen(props: TProps) {
  const key = `search-posts-by-term-${props.term}`;
  const loader = useCallback(
    ({ pageParam }: any) => {
      return Requests.SearchPostsByTerm({
        after: pageParam,
        term: props.term,
      });
    },
    [props.term]
  );
  return (
    <>
      <Head>
        <title>Поиск по запросу "{props.term}"</title>
      </Head>
      <GenericPosts initialData={props.data} uniqueKey={key} loader={loader} />
    </>
  );
}
