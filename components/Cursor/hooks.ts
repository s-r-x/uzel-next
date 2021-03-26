import { useEffect, useState } from "react";

const VIEWPORT_VISIBLE_MARGIN_X = 10;
const VIEWPORT_VISIBLE_MARGIN_Y = 5;
const INITIAL_POS = -100;

export const useCursorState = () => {
  const [coords, setCoords] = useState({
    x: INITIAL_POS,
    y: INITIAL_POS,
  });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const onMove = ({ clientX, clientY }: MouseEvent) => {
      setCoords({
        x: clientX - 20,
        y: clientY - 20,
      });
      if (
        clientY <= VIEWPORT_VISIBLE_MARGIN_Y ||
        clientX <= VIEWPORT_VISIBLE_MARGIN_X ||
        clientX >= window.innerWidth - VIEWPORT_VISIBLE_MARGIN_X ||
        clientY >= window.innerHeight - VIEWPORT_VISIBLE_MARGIN_Y
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    const onOver = (e: MouseEvent) => {
      const tar = e.target as HTMLElement;
      const link = tar.closest("a, button, input, textarea");
      setIsActive(Boolean(link));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);
  return { x: coords.x, y: coords.y, isActive, isVisible };
};
