import { useState, useCallback, SyntheticEvent } from "react";

export const useImageState = () => {
  const [loaded, setLoaded] = useState(false);
  const onLoad = useCallback(({ target }: SyntheticEvent<HTMLImageElement>) => {
    if (!(target as HTMLImageElement).src.includes("data:image")) {
      setLoaded(true);
    }
  }, []);
  return {
    loaded,
    onLoad,
  };
};
