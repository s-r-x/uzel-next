import { useRef } from "react";
import * as S from "./styled";
import { useDragConstraint, useInitialDrag } from "./hooks";
import PostsLoader from "./Loader";
import PostsList from "./PostsList";
import { TGenericPostsProps } from "./typings";
import ScreenSlideTransition from "../ScreenSlideTransition";

export default function GenericPosts(props: TGenericPostsProps) {
  const containerRef = useRef<HTMLDivElement>();
  const initialDrag = useInitialDrag({
    containerRef,
    uniqueKey: props.uniqueKey,
  });
  const dragConstraint = useDragConstraint({ containerRef, data: props.data });
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
                x: initialDrag,
                scale: 1,
              }}
              drag="x"
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
