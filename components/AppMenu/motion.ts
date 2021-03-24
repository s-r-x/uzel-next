import { Easings } from "@/config/easings";
import { Transition, Variants } from "framer-motion";

export const contentContainerVariants: Variants = {
  exit: {
    y: "-100%",
  },
  initial: {
    y: "100%",
  },
  animate: {
    y: "0%",
  },
};

export const innerContainerTransition: Transition = {
  duration: 0.75,
  ease: Easings.one,
};
export const containerMobileVariants = {
  exit: {
    x: "100%",
  },
  initial: {
    x: "-100%",
  },
  animate: {
    x: "0%",
  },
};
