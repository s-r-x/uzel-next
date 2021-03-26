import { AnimatePresence, motion } from "framer-motion";
import Particles from "./Particles";
import { LikeConfig } from "./config";
import { filledHeartVariants, outlineHeartVariants } from "./motion";
import { useLike } from "@/hooks/useLike";
import { memo } from "react";

type TProps = {
  postId: number;
  postSlug: string;
};
const PostLike = (props: TProps) => {
  const { hasLike, addLike } = useLike(props);
  return (
    <button
      title={"Поставить лайк"}
      css={`
        position: relative;
      `}
      style={{
        pointerEvents: hasLike ? "none" : "auto",
      }}
      disabled={hasLike}
      onClick={addLike}
    >
      <motion.svg
        viewBox="0 0 100 89"
        width={LikeConfig.heartSize}
        height={LikeConfig.heartSize}
        animate={hasLike ? "liked" : "empty"}
        whileTap="pressed"
      >
        <motion.path
          variants={outlineHeartVariants}
          fill="var(--heart-color)"
          d={LikeConfig.heartOutlinePath}
        />
        <motion.path
          variants={filledHeartVariants}
          fill="var(--heart-color)"
          d={LikeConfig.heartPath}
        />
      </motion.svg>
      <AnimatePresence>{hasLike && <Particles />}</AnimatePresence>
    </button>
  );
};
export default memo(PostLike);
