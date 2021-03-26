import { Easings } from "@/config/easings";
import { Variants } from "framer-motion";
import random from "lodash/random";

export const outlineHeartVariants: Variants = {
  empty: {
    scale: 0.85,
  },
  pressed: {
    scale: 0.7,
  },
};
export const filledHeartVariants: Variants = {
  empty: {
    scale: 0,
  },
  liked: {
    scale: 0.95,
  },
  pressed: {
    scale: 0.15,
  },
};

export const particleVariants: Variants = {
  initial: () => ({
    opacity: 0,
    scale: 0.125,
    rotate: random(-45, 45),
    y: random(-20, -10),
  }),
  animate: () => ({
    transition: { duration: 0.75 },
    opacity: [null, 1, 0],
    scale: 0.2,
    rotate: random(-45, 45),
    y: random(-60, -50),
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
