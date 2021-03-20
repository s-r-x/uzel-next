import * as S from "./styled";
import Spin from "@/components/Spin";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
type TProps = {
  isFetching: boolean;
  fetchMore: Function;
  hasMore: boolean;
};
export default function ObservationsLoader(props: TProps) {
  const { ref, inView } = useInView({
    rootMargin: "250px",
  });
  useEffect(() => {
    if (inView && props.hasMore) {
      props.fetchMore();
    }
  }, [inView, props.hasMore]);
  return (
    <S.LoaderContainer ref={ref}>
      {props.isFetching && <Spin />}
    </S.LoaderContainer>
  );
}
