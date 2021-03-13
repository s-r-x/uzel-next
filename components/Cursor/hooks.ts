import { useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

export const useCursorState = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const opacity = useMotionValue(0.3);
  useEffect(() => {
    const onMove = ({ clientX, clientY }: MouseEvent) => {
      animate(x, clientX - 20);
      animate(y, clientY - 20);
    };
    const onOver = (e: MouseEvent) => {
      const tar = e.target as HTMLElement;
      const link = tar.closest("a");
      if (!link) {
        animate(opacity, 0.3);
      } else {
        animate(opacity, 1);
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);
  return { x, y, opacity };
};
