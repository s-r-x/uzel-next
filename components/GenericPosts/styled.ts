import styled from "styled-components";
import { motion } from "framer-motion";
import { AppShellConfig } from "@/config/app-shell";
import { DevicesConfig } from "@/config/devices";

export const Container = motion.custom(styled.div`
  display: flex;
  height: calc(100vh - ${AppShellConfig.headerHeight}px);
  padding-top: 50px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    height: auto;
    flex-direction: column;
    padding: 15px;
  }
`);
export const ScrollMask = styled.div`
  width: 100vw;
  overflow: hidden;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    overflow: visible;
    width: auto;
  }
`;
