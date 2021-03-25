import GenericPosts from "@/components/GenericPosts";
import { SearchPostsByTermQuery } from "@/typings/wp";
import { Requests } from "@/network/requests";
import { useCallback } from "react";
import { NextSeo } from "next-seo";

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
      <NextSeo title={`Поиск по запросу ${props.term}`}></NextSeo>
      <GenericPosts initialData={props.data} uniqueKey={key} loader={loader} />
    </>
  );
}
