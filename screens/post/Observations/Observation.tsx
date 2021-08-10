import { TGetObservationByIdRes } from "@/typings/i-nat";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import * as S from "./styled";
import { INaturalistConfig } from "@/config/i-naturalist";

type TProps = {
  observation: TGetObservationByIdRes;
};
export default function Observation({ observation }: TProps) {
  const date = useFormattedDate(observation.date, "lll");
  return (
    <S.Observation
      target="_blank"
      rel="noopener noreferrer"
      href={`${INaturalistConfig.observationsUrl}/${observation.id}`}
    >
      <S.Thumb src={observation.thumb} alt={observation.name} />
      <div>
        <strong>{observation.name}</strong>
        <time dateTime={observation.date}>{date}</time>
      </div>
    </S.Observation>
  );
}
