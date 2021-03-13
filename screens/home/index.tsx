import Head from "next/head";
import { useInfiniteQuery } from "react-query";
import { gqlClient } from "../../network/gqlClient";
import { GET_POSTS_QUERY } from "../../network/queries/get-posts";
import { Fragment, useRef } from "react";
import Post from "./Post";
import * as S from "./styled";
import { useDragConstraint, useInitialDrag } from "./hooks";
import PostsLoader from "./Loader";
import PostsList from "./PostsList";

const loader = ({ pageParam }: any) => {
  return gqlClient.request(GET_POSTS_QUERY, {
    first: 10,
    after: pageParam,
  });
};

export default function HomeScreen(props) {
  const containerRef = useRef<HTMLDivElement>();
  const initialDrag = useInitialDrag({ containerRef });
  const dragConstraint = useDragConstraint({ containerRef });
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
      <>
        {isLoading ? (
          <div>loading</div>
        ) : (
          <>
            <S.ScrollMask>
              <S.Container
                dragDirectionLock
                dragConstraints={{ right: 0, left: dragConstraint }}
                style={{
                  x: initialDrag,
                }}
                drag="x"
                ref={containerRef}
              >
                <PostsList pages={data.pages} />
                {hasNextPage && (
                  <PostsLoader
                    fetchMore={fetchNextPage}
                    isFetching={isFetching}
                  />
                )}
              </S.Container>
            </S.ScrollMask>
          </>
        )}
      </>
    </>
  );
}
