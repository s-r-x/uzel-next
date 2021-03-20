import { INaturalistConfig } from "@/config/i-naturalist";
import { useFormattedDate } from "@/hooks/useFormattedDate";
import { TGetLastObservationsRes } from "@/typings/i-nat";
import * as S from "./styled";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { memo } from "react";

type TProps = {
  observation: TGetLastObservationsRes;
};
const Observation = ({ observation: obs }: TProps) => {
  const date = useFormattedDate(obs.date, "lll");
  return (
    <VerticalTimelineElement
      date={date}
      icon={<S.ObservationThumb src={obs.thumb} />}
      contentArrowStyle={{ borderRight: "7px solid  var(--primary-color)" }}
    >
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${INaturalistConfig.observationsUrl}/${obs.id}`}
        >
          {obs.name}
        </a>
      </div>
    </VerticalTimelineElement>
  );
};

export default memo(Observation);
