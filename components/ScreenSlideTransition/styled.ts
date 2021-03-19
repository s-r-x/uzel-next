import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion.custom(styled.div`
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
  height: 100vh;
  background: #eee;
  z-index: 2;
  pointer-events: none;
`);
