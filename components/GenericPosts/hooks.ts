import { useMotionValue, usePresence } from "framer-motion";
import { useState, useEffect, MutableRefObject } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { TGenericPostsUniqueKey } from "./typings";

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
  uniqueKey: TGenericPostsUniqueKey;
};

const latestDrag: { [key in TGenericPostsUniqueKey]: number } = {
  home: 0,
  tags: 0,
  categories: 0,
};
export const useInitialDrag = (props: TUseInitialDragProps) => {
  const drag = useMotionValue(latestDrag[props.uniqueKey]);
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
  }, [isPresent]);
  return drag;
};
