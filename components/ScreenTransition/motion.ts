import { Transition, Variants } from "framer-motion";

export const variants: Variants = {
  exit: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
};
export const transition: Transition = {
  duration: 0.2,
};
