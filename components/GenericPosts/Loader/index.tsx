import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Instagram as Placeholder } from "react-content-loader";

type TPostsLoaderProps = {
  isFetching: boolean;
  fetchMore: Function;
};
export default function PostsLoader(props: TPostsLoaderProps) {
  const { ref, inView } = useInView({
    rootMargin: "1000px",
  });
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
      `}
    >
      {props.isFetching && (
        <Placeholder uniqueKey="123" foregroundColor="var(--primary-color" />
      )}
    </div>
  );
}
