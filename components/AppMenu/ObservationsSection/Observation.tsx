import { INaturalistConfig } from "@/config/i-naturalist";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import { TGetLastObservationsRes } from "@/typings/i-nat";
import * as S from "./styled";
type TProps = {
  observation: TGetLastObservationsRes;
};
export default function Observation({ observation: obs }: TProps) {
  const date = useFormattedDate(obs.date, "lll");
  return (
    <S.Observation>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`${INaturalistConfig.observationsUrl}/${obs.id}`}
      >
        <img src={obs.thumb} />
        <S.ObservationMeta>
          <span>{obs.name}</span>
          <time dateTime={obs.date}>{date}</time>
        </S.ObservationMeta>
      </a>
    </S.Observation>
  );
}
