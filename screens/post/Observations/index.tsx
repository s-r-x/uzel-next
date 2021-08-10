import { GetPostBySlugQuery } from "@/typings/wp";
import * as S from "./styled";
import { QueryKeysConfig } from "@/config/query-keys";
import { Requests } from "@/network/requests";
import { useExtractObservationsIds } from "./hooks";
import isempty from "lodash/isEmpty";
import { useQueries, UseQueryOptions, UseQueryResult } from "react-query";
import Observation from "./Observation";

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
function useQueriesTyped<TQueries extends readonly UseQueryOptions[]>(
  queries: [...TQueries]
): {
  [ArrayElement in keyof TQueries]: UseQueryResult<
    TQueries[ArrayElement] extends { select: infer TSelect }
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        TSelect extends (data: any) => any
        ? ReturnType<TSelect>
        : never
      : Awaited<
          ReturnType<
            NonNullable<
              Extract<TQueries[ArrayElement], UseQueryOptions>["queryFn"]
            >
          >
        >
  >;
} {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useQueries(
    queries as UseQueryOptions<unknown, unknown, unknown>[]
  ) as any;
}
type TProps = {
  observations: GetPostBySlugQuery["post"]["iNaturalist"]["observations"];
};
type TFn = typeof Requests.getObservationById;
export default function Observations({ observations: obsStr }: TProps) {
  const ids = useExtractObservationsIds(obsStr);
  const obsQueries = useQueriesTyped(
    ids.map((id) => ({
      queryKey: [QueryKeysConfig.observation, id],
      queryFn: () => Requests.getObservationById(id),
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }))
  );
  if (isempty(ids)) return null;
  return (
    <S.Container>
      <S.Header>Наблюдения</S.Header>
      <ul>
        {obsQueries.map((query, idx) => (
          <li key={idx}>
            {!query.data || query.isLoading ? (
              <span>Загрузка...</span>
            ) : (
              <Observation observation={query.data} />
            )}
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
