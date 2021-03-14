import styled from "styled-components";
import { motion } from "framer-motion";

export const ThumbContainer = styled.div`
  height: 340px;
  max-height: 340px;
  overflow: hidden;
  position: relative;
  min-height: 340px;
`;
export const Thumb = motion.custom(styled.img`
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
`);
