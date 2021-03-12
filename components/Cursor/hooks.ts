import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
const springConfig = { damping: 25, stiffness: 700 };

export const useCursorCoords = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  useEffect(() => {
    const onMove = ({ clientX, clientY }: MouseEvent) => {
      x.set(clientX - 20);
      y.set(clientY - 20);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return { x: springX, y: springY };
};
