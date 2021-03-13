import { HourGlassIcon } from "_c/Icon";
import { motion } from "framer-motion";

export default function LoadingIndicator() {
  return (
    <motion.div
      style={{
        width: 24,
        height: 24,
      }}
      animate={{ rotate: 180 }}
      transition={{ repeat: Infinity, duration: 1, repeatType: "loop" }}
    >
      <HourGlassIcon size="24" />
    </motion.div>
  );
}
