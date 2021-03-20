import { Easings } from "@/config/easings";
import { Transition, Variants } from "framer-motion";

export const tagVariants: Variants = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
export const tagTransition: Transition = {
  ease: Easings.one,
  duration: 1,
};
export const tagsListTransition: Transition = {
  staggerChildren: 0.0125,
};
