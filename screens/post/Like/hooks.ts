import Simplex from "simplex-noise";
import { LikeConfig } from "./config";
import { useMemo } from "react";
const simplex = new Simplex();

export const useParticleX = (idx: number) => {
  return useMemo(() => {
    return simplex.noise2D(idx, 1) * ((LikeConfig.heartSize - 15) / 2);
  }, [idx]);
};
