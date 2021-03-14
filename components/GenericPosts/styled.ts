import styled from "styled-components";
import { motion } from "framer-motion";
import { AppShellConfig } from "@/config/app-shell";

export const Container = motion.custom(styled.div`
  display: flex;
  height: calc(100vh - ${AppShellConfig.headerHeight}px);
  padding-top: 50px;
`);
export const ScrollMask = styled.div`
  width: 100vw;
  overflow: hidden;
`;
