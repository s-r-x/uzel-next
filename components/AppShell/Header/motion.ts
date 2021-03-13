import { Transition, Variants } from "framer-motion";

export const variants: Variants = {
  initial: {
    y: "-100%",
  },
  exit: {
    y: "-100%",
  },
  animate: {
    y: "0%",
  },
};
export const transition: Transition = {
  duration: 0.2,
  ease: "linear",
};
