import { Message } from "@/components/Message";
import { motion, Variants } from "framer-motion";
import { innerSectionContainerVariants } from "../motion";

const MotionMessage = motion(Message);
const variants: Variants = {
  ...innerSectionContainerVariants,
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};
export default function ToursSection() {
  return (
    <MotionMessage
      animate="animate"
      exit="exit"
      initial="initial"
      variants={variants}
      css={`
        margin: auto;
      `}
    >
      Этот раздел находится в разработке
    </MotionMessage>
  );
}
