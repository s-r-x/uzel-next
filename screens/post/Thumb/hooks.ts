import { useEffect, useRef, useState } from "react";

const TIMEOUT = 1750;
export const useIsThumbLayoutActive = () => {
  const [active, setActive] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActive(false);
    }, TIMEOUT);
    return () => clearTimeout(timeoutRef.current);
  }, []);
  return active;
};
