import { useState } from "react";
import * as S from "./styled";
import {
  topBrickVariants,
  bottomBrickVariants,
  middleBrickVariants,
  topBrickClosedVariants,
  bottomBrickClosedVariants,
  brickGroupTransition,
  brickTransition,
} from "./motion";
import { AnimatePresence, motion } from "framer-motion";

type TProps = {
  className?: string;
};

const BrickGroupContainer: React.FC = (props) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    transition={brickGroupTransition}
  >
    {props.children}
  </motion.div>
);
export default function Hamburger(props: TProps) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((open) => !open);
  return (
    <S.Container onClick={toggle} className={props.className}>
      <AnimatePresence initial={false} exitBeforeEnter>
        {open ? (
          <BrickGroupContainer key="ham-open">
            <S.ClosedBrick
              transition={brickTransition}
              variants={topBrickClosedVariants}
              style={{
                rotateZ: -45,
              }}
            />
            <S.ClosedBrick
              transition={brickTransition}
              variants={bottomBrickClosedVariants}
              style={{
                rotateZ: 45,
              }}
            />
          </BrickGroupContainer>
        ) : (
          <BrickGroupContainer key="ham-close">
            <S.TopBrick
              transition={brickTransition}
              variants={topBrickVariants}
            />
            <S.MiddleBrick
              transition={brickTransition}
              variants={middleBrickVariants}
            />
            <S.BottomBrick
              transition={brickTransition}
              variants={bottomBrickVariants}
            />
          </BrickGroupContainer>
        )}
      </AnimatePresence>
    </S.Container>
  );
}
