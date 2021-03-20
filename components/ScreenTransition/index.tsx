import { variants, transition } from "./motion";
import { motion } from "framer-motion";

const ScreenTransition: React.FC = (props) => (
  <motion.div
    animate="animate"
    exit="exit"
    initial="initial"
    variants={variants}
    transition={transition}
  >
    {props.children}
  </motion.div>
);
export default ScreenTransition;
