import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion.custom(styled.div`
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
  height: 100vh;
  background: #f0f0f0;
  z-index: 2;
`);
