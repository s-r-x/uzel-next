import { useEffect, useRef } from "react";

type TPreloadOptions = {
  delay?: number;
};
export const usePreloadModules = (
  modules: any[],
  options: TPreloadOptions = {
    delay: 100,
  }
) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      modules.forEach((module) => {
        module.render.preload();
      });
    }, options.delay);
  }, modules);
};
