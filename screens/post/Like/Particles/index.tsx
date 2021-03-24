import { motion } from "framer-motion";
import { LikeConfig } from "../config";
import range from "lodash/range";
import { particleVariants } from "../motion";
import { useParticleX } from "../hooks";
const particles = range(LikeConfig.particlesAmount);

type TParticleProps = {
  idx: number;
};
const Particle = ({ idx }: TParticleProps) => {
  const x = useParticleX(idx);
  return (
    <g transform="translate(50, 50)">
      <motion.path
        fill="var(--heart-color)"
        d={LikeConfig.heartPath}
        variants={particleVariants}
        style={{ x, y: -15 }}
      />
    </g>
  );
};
export default function LikeParticles() {
  return (
    <motion.svg
      width={LikeConfig.particlesContainerSize}
      height={LikeConfig.particlesContainerSize}
      initial="initial"
      exit="exit"
      animate="animate"
      transition={{
        staggerChildren: 0.15,
      }}
      style={{
        pointerEvents: "none",
        x: -LikeConfig.particlesContainerSize / 2,
        left: "50%",
        top: "50%",
        y: -LikeConfig.particlesContainerSize / 2,
        position: "absolute",
      }}
    >
      {particles.map((n, idx) => (
        <Particle key={n} idx={idx} />
      ))}
    </motion.svg>
  );
}
