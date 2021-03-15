import { Requests } from "@/network/requests";
import { useQuery } from "react-query";
import { List } from "react-content-loader";
import * as S from "./styled";
import Observation from "./Observation";

export default function AppMenuObservationsSection() {
  const { isLoading, isFetching, data } = useQuery(
    "observations",
    () => Requests.getLatestObservations(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  console.log(data);
  if (isLoading) {
    return <List />;
  }
  return (
    <S.ObservationsList>
      {data.map((observation) => (
        <Observation observation={observation} key={observation.id} />
      ))}
    </S.ObservationsList>
  );
}
