import { useMemo } from "react";

export const useSplitText = (text: string) => {
  return useMemo(() => {
    return text.split(" ").map((word) => word.split(""));
  }, [text]);
};
