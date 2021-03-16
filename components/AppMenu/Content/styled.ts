import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion.custom(styled.div`
  background: white;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: center;
`);
