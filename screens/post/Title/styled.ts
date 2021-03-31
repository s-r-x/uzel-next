import { DevicesConfig } from "@/config/devices";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion(styled.h1`
  font-weight: 900;
  font-size: 41px;
  margin: 0;
  font-family: var(--font-primary);
  perspective: 2000;
  margin-bottom: 5px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    font-size: 27px;
  }
`);
export const TitleWord = styled.span`
  display: inline-flex;
`;
export const TitleLetter = motion(styled.span`
  transform-style: preserve-3d;
  display: inline-flex;
`);

