import { Transition, Variants } from "framer-motion";

export const variants: Variants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: "0%",
  },
};
export const transition: Transition = {
  duration: 0.2,
  ease: "linear",
};
