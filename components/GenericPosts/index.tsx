import { useRef } from "react";
import * as S from "./styled";
import { useDragConstraint, useInitialDrag } from "./hooks";
import PostsLoader from "./Loader";
import PostsList from "./PostsList";
import { TGenericPostsProps } from "./typings";

export default function GenericPosts(props: TGenericPostsProps) {
  const containerRef = useRef<HTMLDivElement>();
  const initialDrag = useInitialDrag({
    containerRef,
    uniqueKey: props.uniqueKey,
  });
  const dragConstraint = useDragConstraint({ containerRef });
  return (
    <>
      {props.isLoading ? (
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
              <PostsList pages={props.data.pages} />
              {props.hasMore && (
                <PostsLoader
                  fetchMore={props.fetchMore}
                  isFetching={props.isFetching}
                />
              )}
            </S.Container>
          </S.ScrollMask>
        </>
      )}
    </>
  );
}
