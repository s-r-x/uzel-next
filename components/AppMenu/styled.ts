import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion.custom(styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  display: flex;
  height: 100vh;
  z-index: 9;
  overflow: hidden;
`);
export const ContentContainer = motion.custom(styled.div`
  background: deeppink;
  width: 70vw;
`);

export const NavContainer = motion.custom(styled.div`
  width: 30vw;
  background: red;
`);
