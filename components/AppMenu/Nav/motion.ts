import { Easings } from "@/config/easings";
import { Transition, Variants } from "framer-motion";

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

export const navItemTransition: Transition = {
  duration: 0.7,
  ease: Easings.easeOutQuad,
};
export const navItemVariants: Variants = {
  exit: {
    y: 30,
    opacity: 0,
    transition: {
      ...navItemTransition,
      duration: 0.4,
    },
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

export const navListVariants: Variants = {
  animate: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0,
    },
  },
};
