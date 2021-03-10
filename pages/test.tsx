import Link from "next/link";
import { motion, Variants } from "framer-motion";
const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
export default function Test() {
  return (
    <motion.div
      style={{
        width: "100vw",
        height: "100vh",
        background: "deeppink",
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      <div>test page</div>
      <Link href="/">go home</Link>
    </motion.div>
  );
}
