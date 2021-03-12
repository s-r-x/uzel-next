import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type TProps = {
  src: string;
};
export const useLazyImage = (props: TProps) => {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.src = props.src;
      img.onload = () => setLoaded(true);
    }
  }, [inView, props.src]);
  return {
    ref,
    loaded,
  };
};
