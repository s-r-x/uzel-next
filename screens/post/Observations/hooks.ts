import { Maybe } from "@/typings/wp";
import { useMemo } from "react";
import isempty from "lodash/isEmpty";

export const useExtractObservationsIds = (obs: Maybe<string>): string[] => {
  return useMemo(() => {
    if (!obs) return [];
    const ids = obs.replace(/\s/g, "").split(",");
    if (isempty(ids)) return [];
    return ids;
  }, [obs]);
};
