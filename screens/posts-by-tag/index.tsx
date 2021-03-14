import Head from "next/head";
import { useInfiniteQuery } from "react-query";
import GenericPosts from "@/components/GenericPosts";
import { GetPostsByTagQuery } from "@/typings/wp";
import { Requests } from "@/network/requests";

type TProps = {
  data: GetPostsByTagQuery;
  tag: string;
};
export default function PostsByTagScreen(props: TProps) {
  const key = `posts-by-tag-${props.tag}`;
  const {
    data,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    key,
    ({ pageParam }: any) =>
      Requests.getPostsByTag({
        after: pageParam,
        tag: props.tag,
      }),
    {
      getNextPageParam: (lastPage) => lastPage?.posts?.pageInfo?.endCursor,
      enabled: true,
      initialData: { pages: [props.data], pageParams: undefined },
      refetchOnWindowFocus: false,
    }
  );
  return (
    <>
      <Head>
        <title>home page</title>
      </Head>
      <GenericPosts
        uniqueKey={key}
        hasMore={hasNextPage}
        fetchMore={fetchNextPage}
        isLoading={isLoading}
        isFetching={isFetching}
        data={data}
      />
    </>
  );
}
