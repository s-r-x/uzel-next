import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion.custom(styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  background: transparent;
  border: 2px solid var(--primary-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  mix-blend-mode: multiply;
`);
