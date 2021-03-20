import { Requests } from "@/network/requests";
import { useInfiniteQuery } from "react-query";
import * as S from "./styled";
import Observation from "./Observation";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Spin from "@/components/Spin";
import { useMemo } from "react";
import flatten from "lodash/flatten";
import ObservationsLoader from "./Loader";

const loader = ({ pageParam }: any) =>
  Requests.getLatestObservations({
    page: pageParam,
  });

export default function AppMenuObservationsSection() {
  const {
    data,
    fetchNextPage,
    isLoading,
    isFetching,
    hasNextPage,
  } = useInfiniteQuery("observations", loader, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    getNextPageParam: (_last, pages) => pages.length + 1,
  });
  const observations = useMemo(() => {
    if (!data) {
      return [];
    }
    return flatten(data.pages);
  }, [data?.pages]);
  if (isLoading) {
    return (
      <Spin
        css={`
          margin: auto;
          --sk-size: 80px;
        `}
      />
    );
  }
  return (
    <S.Container data-scroll-lock-scrollable>
      <S.GlobalStyle />
      <VerticalTimeline>
        {observations.map((observation) => (
          <Observation observation={observation} key={observation.id} />
        ))}
      </VerticalTimeline>
      <ObservationsLoader
        hasMore={hasNextPage}
        isFetching={isFetching}
        fetchMore={fetchNextPage}
      />
    </S.Container>
  );
}
