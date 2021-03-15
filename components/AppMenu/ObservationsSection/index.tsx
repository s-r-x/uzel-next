import { Requests } from "@/network/requests";
import { useQuery } from "react-query";

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
    return null;
  }
  return (
    <div>
      {data.map((obs) => (
        <div key={obs.id}>
          {obs.date}
          {obs.name}
          {obs.thumb && <img src={obs.thumb} />}
        </div>
      ))}
    </div>
  );
}
