import { useRef } from "react";
import * as S from "./styled";
import { useDragConstraint, useInitialDrag } from "./hooks";
import PostsLoader from "./Loader";
import PostsList from "./PostsList";
import { TGenericPostsProps } from "./typings";
import ScreenSlideTransition from "_c/ScreenSlideTransition/loadable";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function GenericPosts(props: TGenericPostsProps) {
  const containerRef = useRef<HTMLDivElement>();
  const initialDrag = useInitialDrag({
    containerRef,
    uniqueKey: props.uniqueKey,
  });
  const dragConstraint = useDragConstraint({ containerRef, data: props.data });
  const isMobile = useIsMobile();
  return (
    <>
      {props.isLoading ? (
        <div>loading</div>
      ) : (
        <>
          <ScreenSlideTransition />
          <S.ScrollMask>
            <S.Container
              dragDirectionLock
              dragConstraints={{ right: 0, left: dragConstraint }}
              style={{
                x: isMobile ? undefined : initialDrag,
                scale: 1,
              }}
              //drag="x"
              drag={isMobile ? false : "x"}
              ref={containerRef}
            >
              <PostsList pages={props.data.pages} />
              <PostsLoader
                hasMore={props.hasMore}
                fetchMore={props.fetchMore}
                isFetching={props.isFetching}
              />
            </S.Container>
          </S.ScrollMask>
        </>
      )}
    </>
  );
}
