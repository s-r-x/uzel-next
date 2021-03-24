import { useMotionValue, usePresence } from "framer-motion";
import { useState, useEffect, MutableRefObject, useLayoutEffect } from "react";

type TUseDragConstraintProps = {
  containerRef: MutableRefObject<HTMLDivElement>;
  data: any;
};
export const useDragConstraint = ({
  containerRef,
  data,
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
  }, [data]);
  return dragConstraint;
};
type TUseInitialDragProps = {
  containerRef: MutableRefObject<HTMLDivElement>;
  uniqueKey: string;
};

const latestDrag: { [key: string]: number } = {};
export const useInitialDrag = (props: TUseInitialDragProps) => {
  const drag = useMotionValue(latestDrag[props.uniqueKey] || 0);
  useLayoutEffect(() => {
    return () => {
      const $el = props.containerRef.current;
      if ($el) {
        const matrix = new DOMMatrixReadOnly(
          window.getComputedStyle($el).transform
        );
        latestDrag[props.uniqueKey] = matrix.m41;
      }
    };
  }, [props.uniqueKey]);
  return drag;
};
