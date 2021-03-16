import { Easings } from "@/config/easings";
import { Transition, Variants } from "framer-motion";

export const contentContainerVariants: Variants = {
  exit: {
    y: "100%",
  },
  initial: {
    y: "-100%",
  },
  animate: {
    y: "0%",
  },
};

export const navContainerVariants: Variants = {
  exit: {
    y: "100%",
  },
  initial: {
    y: "-100%",
  },
  animate: {
    y: "0%",
  },
};
export const navItemVariants: Variants = {
  exit: {
    y: 45,
    opacity: 0,
  },
  initial: {
    y: 75,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};
export const navItemTransition: Transition = {
  duration: 0.7,
  ease: Easings.easeOutQuad,
};

export const innerContainerTransition: Transition = {
  duration: 0.75,
  ease: Easings.easeOutCubic,
};
