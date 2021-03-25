import {
  useEffect,
  useRef,
  useState,
  useCallback,
  SyntheticEvent,
} from "react";

const SWITCH_DELAY = 100;
export const useImageState = () => {
  const [loaded, setLoaded] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const shouldShowPlaceholderRef = useRef(true);
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (shouldShowPlaceholderRef.current) {
        setLoaded(false);
      }
    }, SWITCH_DELAY);
    return () => clearTimeout(timeoutRef.current);
  }, []);
  const onLoad = useCallback(({ target }: SyntheticEvent<HTMLImageElement>) => {
    if (!(target as HTMLImageElement).src.includes("data:image")) {
      setTimeout(() => {
        shouldShowPlaceholderRef.current = false;
        setLoaded(true);
      }, 1);
    }
  }, []);
  return {
    loaded,
    onLoad,
  };
};
