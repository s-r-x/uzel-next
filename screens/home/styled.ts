import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = motion.custom(styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  padding-top: 50px;
`);
