import { useMemo } from "react";
import { stripHtml } from "string-strip-html";

export const useStripHtml = (html: string) => {
  return useMemo(() => {
    return stripHtml(html).result;
  }, [html]);
};
