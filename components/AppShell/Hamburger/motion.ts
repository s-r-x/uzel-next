import { Transition, Variants } from "framer-motion";
import { HamburgerConfig } from "./config";

export const topBrickVariants: Variants = {
  exit: {
    x: HamburgerConfig.width,
  },
  initial: {
    x: -HamburgerConfig.width,
  },
  animate: {
    x: 0,
  },
};

export const middleBrickVariants: Variants = {
  exit: {
    scaleX: 0,
  },
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
  },
};
export const bottomBrickVariants: Variants = {
  exit: {
    x: -HamburgerConfig.width,
  },
  initial: {
    x: HamburgerConfig.width,
  },
  animate: {
    x: 0,
  },
};
export const topBrickClosedVariants: Variants = {
  animate: {
    x: -5,
    y: -1,
  },
  exit: {
    x: -26,
    y: 20,
  },
  initial: {
    x: 16,
    y: -21,
  },
};

export const bottomBrickClosedVariants: Variants = {
  animate: {
    x: -5,
    y: -1,
  },
  exit: {
    x: -26,
    y: -21,
  },
  initial: {
    x: 16,
    y: 19,
  },
};
export const brickTransition: Transition = {
  duration: 0.4,
};
export const brickGroupTransition: Transition = {
  staggerChildren: 0.15,
};
