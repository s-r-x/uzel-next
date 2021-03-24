import { Variants } from "framer-motion";
import { LikeConfig } from "./config";

export const outlineHeartVariants: Variants = {
  pressed: {
    scale: 0.8,
  },
};
export const filledHeartVariants: Variants = {
  empty: {
    scale: 0,
  },
  liked: {
    scale: .96,
  },
  pressed: {
    scale: 0.15,
  },
};

export const particleVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.15,
  },
  animate: {
    transition: { duration: 1, repeat: Infinity },
    opacity: [null, 1, 0],
    scale: 0.2,
    y: LikeConfig.particleMaxY,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
