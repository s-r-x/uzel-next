import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

type TPostsLoaderProps = {
  isFetching: boolean;
  fetchMore: Function;
};
export default function PostsLoader(props: TPostsLoaderProps) {
  const { ref, inView } = useInView();
  const fetchMoreRef = useRef(props.fetchMore);
  fetchMoreRef.current = props.fetchMore;
  useEffect(() => {
    if (inView) {
      props.fetchMore();
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      css={`
        width: 512px;
        min-width: 512px;
        background: yellow;
      `}
    >
      {props.isFetching && "fetching"}
    </div>
  );
}
