import { useViewportScroll } from "framer-motion";

export const useScrollState = () => {
  const { scrollYProgress } = useViewportScroll();
  return {
    progress: scrollYProgress,
  };
};
