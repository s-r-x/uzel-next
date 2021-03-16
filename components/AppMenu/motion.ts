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
  ease: Easings.easeOutCubic,
};
