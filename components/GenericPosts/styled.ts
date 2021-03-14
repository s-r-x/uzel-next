import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = motion.custom(styled.div`
  display: flex;
  height: 100vh;
  padding-top: 70px;
`);
export const ScrollMask = styled.div`
  width: 100vw;
  overflow: hidden;
`;
