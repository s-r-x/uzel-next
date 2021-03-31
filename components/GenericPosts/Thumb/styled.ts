import styled from "styled-components";
import { DevicesConfig } from "@/config/devices";
import { motion } from "framer-motion";

export const ThumbContainer = motion(styled.div`
  overflow: hidden;
  min-height: 340px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    min-height: auto;
  }
`);
