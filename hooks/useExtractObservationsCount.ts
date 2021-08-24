import { Maybe } from "@/typings/wp";
import { useMemo } from "react";
import { useExtractObservationsIds } from "./useExtractObservationsIds";

export const useExtractObservationsCount = (obs: Maybe<string>): number => {
  const ids = useExtractObservationsIds(obs);
  return useMemo(() => {
    return ids.length;
  }, [ids]);
};
