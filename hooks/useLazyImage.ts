import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type TProps = {
  src: string;
};
type TLoadingState = "idle" | "loading" | "loaded";
export const useLazyImage = (props: TProps) => {
  const [loadingState, setLoadingState] = useState<TLoadingState>("idle");
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.src = props.src;
      const timeout = setTimeout(() => {
        setLoadingState("loading");
      }, 50);
      img.onload = () => {
        clearTimeout(timeout);
        setLoadingState("loaded");
      };
    }
  }, [inView, props.src]);
  return {
    loadingState,
    ref,
  };
};
