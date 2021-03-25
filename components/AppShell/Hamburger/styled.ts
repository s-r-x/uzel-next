import styled from "styled-components";
import { motion } from "framer-motion";
import { HamburgerConfig } from "./config";

const Brick = styled.span`
  width: 100%;
  height: ${HamburgerConfig.brickHeight}px;
  position: absolute;
  background-color: var(--content-color);
  left: 0;
`;
export const Container = motion(styled.button`
  position: relative;
  width: ${HamburgerConfig.width}px;
  height: ${HamburgerConfig.height}px;
  overflow: hidden;
`);

export const TopBrick = motion(styled(Brick)`
  top: 0;
`);
export const MiddleBrick = motion(styled(Brick)`
  top: 9px;
`);
export const BottomBrick = motion(styled(Brick)`
  top: 18px;
`);
export const ClosedBrick = motion(styled(Brick)`
  width: ${HamburgerConfig.brickDiagonal}px;
`);
