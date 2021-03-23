import { DevicesConfig } from "@/config/devices";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
  img {
    max-width: 100%;
    height: auto;
  }
  p {
    line-height: 1.45;
  }
  figure {
    margin-left: 0;
    margin-right: 0;
  }
`;
export const Header = styled.header`
  margin-top: 65px;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    margin-top: 15px;
  }
`;
export const Title = motion.custom(styled.h1`
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
export const Date = styled.time`
  font-weight: 400;
`;
export const TitleWord = styled.span`
  display: inline-flex;
`;
export const TitleLetter = motion.custom(styled.span`
  transform-style: preserve-3d;
  display: inline-flex;
`);
