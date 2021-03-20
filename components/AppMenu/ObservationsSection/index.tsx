import { Requests } from "@/network/requests";
import { useQuery } from "react-query";
import * as S from "./styled";
import Observation from "./Observation";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Spin from "@/components/Spin";

export default function AppMenuObservationsSection() {
  const { isLoading, data } = useQuery(
    "observations",
    () => Requests.getLatestObservations(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
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
    <S.Container>
      <S.GlobalStyle />
      <VerticalTimeline>
        {data.map((observation) => (
          <Observation observation={observation} key={observation.id} />
        ))}
      </VerticalTimeline>
    </S.Container>
  );
}
