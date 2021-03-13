import Head from "next/head";
import { useInfiniteQuery } from "react-query";
import GenericPosts from "@/components/GenericPosts";
import { GetPostsQuery } from "@/typings/wp";
import { Requests } from "@/network/requests";

const loader = ({ pageParam }: any) =>
  Requests.getPosts({
    after: pageParam,
  });

type TProps = {
  data: GetPostsQuery;
};
export default function HomeScreen(props: TProps) {
  const {
    data,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery("posts", loader, {
    getNextPageParam: (lastPage) => lastPage?.posts?.pageInfo?.endCursor,
    enabled: true,
    initialData: { pages: [props.data], pageParams: undefined },
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <Head>
        <title>home page</title>
      </Head>
      <GenericPosts
        uniqueKey="home"
        hasMore={hasNextPage}
        fetchMore={fetchNextPage}
        isLoading={isLoading}
        isFetching={isFetching}
        data={data}
      />
    </>
  );
}
