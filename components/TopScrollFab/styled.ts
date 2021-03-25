import { DevicesConfig } from "@/config/devices";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion(styled.div`
  position: fixed;
  bottom: 35px;
  right: 35px;
  z-index: 2;
  @media(max-width: ${DevicesConfig.mobileBreakpoint}px) {
    bottom: 20px;
    right: 20px;
  }
`);