import { useMemo } from "react";
import { useStripHtml } from "./useStripHtml";

const MAX_LEN = 150;
export const usePostExcerpt = (raw: string) => {
  const stripped = useStripHtml(raw);
  return useMemo(() => {
    return stripped.length <= MAX_LEN
      ? stripped
      : stripped.slice(0, MAX_LEN) + "...";
  }, [stripped]);
};
