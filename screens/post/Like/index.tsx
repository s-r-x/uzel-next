import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Particles from "./Particles";
import { LikeConfig } from "./config";
import { filledHeartVariants, outlineHeartVariants } from "./motion";

export default function PostLike() {
  const [liked, setLiked] = useState(false);
  return (
    <button
      title="Поставить лайк"
      css={`
        position: relative;
      `}
      onClick={() => setLiked((liked) => !liked)}
    >
      <motion.svg
        viewBox="0 0 100 89"
        width={LikeConfig.heartSize}
        height={LikeConfig.heartSize}
        animate={liked ? "liked" : "empty"}
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
      <AnimatePresence>{liked && <Particles />}</AnimatePresence>
    </button>
  );
}
