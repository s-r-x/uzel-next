import { Variants } from "framer-motion";

export const variants: Variants = {
  initial: {
    x: "0%",
  },
  animate: {
    x: "100%",
  },
  exit: {
    x: ["-100%", "0%"],
  },
};
