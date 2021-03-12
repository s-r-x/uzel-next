import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion.custom(styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  pointer-events: none;
  background: transparent;
  border: 2px solid var(--primary-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
`);
