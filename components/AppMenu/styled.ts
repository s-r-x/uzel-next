import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion(styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  display: flex;
  height: 100vh;
  z-index: 9;
  overflow: hidden;
`);
