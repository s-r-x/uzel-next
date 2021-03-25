import { DevicesConfig } from "@/config/devices";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion(styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  z-index: 9;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    flex-direction: column;
    justify-content: flex-start;
    background: var(--bg-color);
  }
`);
