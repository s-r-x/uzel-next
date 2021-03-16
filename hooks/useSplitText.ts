import { useMemo } from "react";

export const useSplitText = (text: string) =>
  useMemo(() => text.split(""), [text]);
