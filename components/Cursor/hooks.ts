import { useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

export const useCursorState = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const onMove = ({ clientX, clientY }: MouseEvent) => {
      animate(x, clientX - 20);
      animate(y, clientY - 20);
    };
    const onOver = (e: MouseEvent) => {
      const tar = e.target as HTMLElement;
      const link = tar.closest("a");
      setIsActive(Boolean(link));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);
  return { x, y, isActive };
};
