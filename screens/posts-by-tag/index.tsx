import GenericPosts from "@/components/GenericPosts";
import { GetPostsByTagQuery } from "@/typings/wp";
import { Requests } from "@/network/requests";
import { useCallback, useMemo } from "react";
import { NextSeo } from "next-seo";
import { QueryKeysConfig } from "@/config/query-keys";

type TProps = {
  data: GetPostsByTagQuery;
  tag: string;
};
export default function PostsByTagScreen(props: TProps) {
  const queryKey = useMemo(() => {
    return [QueryKeysConfig.postsByTag, props.tag];
  }, [props.tag]);
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
      <NextSeo title={`Поиск по метке ${props.tag}`}></NextSeo>
      <GenericPosts
        initialData={props.data}
        queryKey={queryKey}
        loader={loader}
      />
    </>
  );
}
