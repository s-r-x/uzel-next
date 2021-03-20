import { useRef } from "react";
import * as S from "./styled";
import { useDragConstraint, useInitialDrag } from "./hooks";
import PostsLoader from "./Loader";
import PostsList from "./PostsList";
import { TGenericPostsProps } from "./typings";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useInfiniteQuery } from "react-query";

export default function GenericPosts(props: TGenericPostsProps) {
  const containerRef = useRef<HTMLDivElement>();
  const initialDrag = useInitialDrag({
    containerRef,
    uniqueKey: props.uniqueKey,
  });
  const {
    data,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(props.uniqueKey, props.loader, {
    getNextPageParam: (lastPage) => lastPage?.posts?.pageInfo?.endCursor,
    enabled: true,
    initialData: { pages: [props.initialData], pageParams: undefined },
    refetchOnWindowFocus: false,
  });
  const dragConstraint = useDragConstraint({ containerRef, data: data });
  const isMobile = useIsMobile();
  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <S.ScrollMask>
          <S.Container
            dragDirectionLock
            dragConstraints={{ right: 0, left: dragConstraint }}
            style={{
              x: isMobile ? undefined : initialDrag,
              scale: 1,
            }}
            drag={isMobile ? false : "x"}
            ref={containerRef}
          >
            <PostsList pages={data.pages} />
            <PostsLoader
              hasMore={hasNextPage}
              fetchMore={fetchNextPage}
              isFetching={isFetching}
            />
          </S.Container>
        </S.ScrollMask>
      )}
    </>
  );
}
