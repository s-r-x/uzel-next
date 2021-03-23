import { DevicesConfig } from "@/config/devices";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion.custom(styled.h1`
  font-weight: 900;
  font-size: 41px;
  margin: 0;
  font-family: var(--font-secondary);
  perspective: 2000;
  margin-bottom: 3px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    font-size: 32px;
  }
`);
export const TitleWord = styled.span`
  display: inline-flex;
`;
export const TitleLetter = motion.custom(styled.span`
  transform-style: preserve-3d;
  display: inline-flex;
`);

