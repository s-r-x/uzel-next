import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

//https://gist.github.com/reecelucas/cd110ece696cca8468db895281fa28cb
export enum EScrollDir {
  UP,
  DOWN,
}
const DELAY = 250;
type TProps = {
  initialDir?: EScrollDir;
  threshold?: number;
  off?: boolean;
  delay?: number;
};
export const useScrollDir = ({
  initialDir = EScrollDir.UP,
  threshold = 0,
  off,
  delay,
}: TProps = {}) => {
  const [scrollDir, setScrollDir] = useState(initialDir);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? EScrollDir.DOWN : EScrollDir.UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = throttle(() => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    }, delay || DELAY);

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    !off
      ? window.addEventListener("scroll", onScroll)
      : setScrollDir(initialDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [initialDir, threshold, off]);

  return scrollDir;
};
