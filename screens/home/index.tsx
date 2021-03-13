import Head from "next/head";
import { useInfiniteQuery } from "react-query";
import { gqlClient } from "../../network/gqlClient";
import { GET_POSTS_QUERY } from "../../network/queries/get-posts";
import GenericPosts from "@/components/GenericPosts";

const loader = ({ pageParam }: any) => {
  return gqlClient.request(GET_POSTS_QUERY, {
    first: 10,
    after: pageParam,
  });
};

export default function HomeScreen(props) {
  const {
    data,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery("posts", loader, {
    getNextPageParam: (lastPage) => lastPage?.posts?.pageInfo?.endCursor,
    enabled: true,
    initialData: props.data,
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
