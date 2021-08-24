import { Maybe } from "@/typings/wp";
import { useMemo } from "react";

export const useExtractObservationsIds = (obs: Maybe<string>): string[] => {
  return useMemo(() => {
    if (!obs) return [];
    const ids = obs.replace(/\s/g, "").split(",");
    return ids;
  }, [obs]);
};
