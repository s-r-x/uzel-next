import { Easings } from "@/config/easings";
import { Transition, Variants } from "framer-motion";

export const commentVariants: Variants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
export const commentTransition: Transition = {
  ease: Easings.one,
  duration: 1,
};
export const commentsListTransition: Transition = {
  staggerChildren: 0.05,
};
