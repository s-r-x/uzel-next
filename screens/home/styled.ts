import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = motion.custom(styled.div`
  display: flex;
  position: fixed;
  height: 100vh;
  padding-top: 50px;
`);
export const ScrollMask = styled.div`
  width: 100vw;
  overflow: hidden;
`;
