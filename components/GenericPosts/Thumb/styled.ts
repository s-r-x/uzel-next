import styled from "styled-components";
import { motion } from "framer-motion";
import { DevicesConfig } from "@/config/devices";

export const ThumbContainer = styled.div`
  height: 340px;
  max-height: 340px;
  overflow: hidden;
  position: relative;
  min-height: 340px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    max-height: none;
    min-height: 400px;
    height: auto;
  }
`;
export const Thumb = motion.custom(styled.img`
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
`);
