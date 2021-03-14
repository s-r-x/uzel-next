import { TStringDict } from "@/next-env";
import { useMotionValue, usePresence } from "framer-motion";
import { useState, useEffect, MutableRefObject } from "react";
import ResizeObserver from "resize-observer-polyfill";

type TUseDragConstraintProps = {
  containerRef: MutableRefObject<HTMLDivElement>;
};
export const useDragConstraint = ({
  containerRef,
}: TUseDragConstraintProps) => {
  const [dragConstraint, setDragConstraint] = useState(0);
  useEffect(() => {
    const set = () => {
      if (containerRef.current) {
        setDragConstraint(
          -(containerRef.current.scrollWidth - window.innerWidth)
        );
      }
    };
    set();
    const resizeObserver = new ResizeObserver(set);
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);
  return dragConstraint;
};
type TUseInitialDragProps = {
  containerRef: MutableRefObject<HTMLDivElement>;
  uniqueKey: string;
};

const latestDrag: { [key: string]: number } = {};
export const useInitialDrag = (props: TUseInitialDragProps) => {
  const drag = useMotionValue(latestDrag[props.uniqueKey] || 0);
  const [isPresent, safeToRemove] = usePresence();
  useEffect(() => {
    if (!isPresent) {
      const $el = props.containerRef.current;
      if ($el) {
        const matrix = new DOMMatrixReadOnly(
          window.getComputedStyle($el).transform
        );
        latestDrag[props.uniqueKey] = matrix.m41;
      }
      safeToRemove();
    }
  }, [isPresent, props.uniqueKey]);
  return drag;
};
