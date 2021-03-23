import Spin from "@/components/Spin";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import * as S from "./styled";

type TPostsLoaderProps = {
  isFetching: boolean;
  fetchMore: Function;
  hasMore: boolean;
};
export default function PostsLoader(props: TPostsLoaderProps) {
  const { ref, inView } = useInView({
    rootMargin: "1000px",
  });
  const fetchMoreRef = useRef(props.fetchMore);
  fetchMoreRef.current = props.fetchMore;
  useEffect(() => {
    if (inView && props.hasMore) {
      fetchMoreRef.current();
    }
  }, [inView, props.hasMore]);
  return (
    <S.Container ref={ref}>
      {props.isFetching && (
        <Spin
          css={`
            --sk-size: 60px;
          `}
        />
      )}
    </S.Container>
  );
}
