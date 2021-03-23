import { Easings } from "@/config/easings";
import { motion, transform, Variants } from "framer-motion";
import { ShareConfig } from "./config";
import { usePolarToCartesian } from "./hooks";

type TProps = {
  idx: number;
  length: number;
  isActive: boolean;
};

const variants: Variants = {
  visible: ({ x, y }: ReturnType<typeof usePolarToCartesian>) => ({
    x,
    y,
    scale: 1,
  }),
  hidden: {
    x: 0,
    y: 0,
    scale: 0.75,
  },
};
const ShareProviderButton: React.FC<TProps> = (props) => {
  const angle = transform(
    props.idx,
    [0, props.length - 1],
    [ShareConfig.startAngle, ShareConfig.endAngle]
  );
  const point = usePolarToCartesian(angle, ShareConfig.outerRadius);
  return (
    <motion.div
      transition={{
        duration: 0.7,
        ease: Easings.one,
      }}
      custom={point}
      variants={variants}
    >
      {props.children}
    </motion.div>
  );
};
export default ShareProviderButton;
