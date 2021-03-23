import { Transition, Variants } from "framer-motion";

export const titleVariants: Variants = {
  exit: {
    opacity: 0,
    y: 25,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -25,
  },
};

export const letterVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
    x: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

export const titleTransition: Transition = {
  staggerChildren: 0.025,
};
export const letterTransition: Transition = {
  duration: 1.5,
  ease: [0.245, 0.495, 0, 0.99],
};
