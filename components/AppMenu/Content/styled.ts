import { motion } from "framer-motion";
import styled from "styled-components";
import { AppShellConfig } from "@/config/app-shell";

export const Container = motion.custom(styled.div`
  background: white;
  width: 70vw;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: ${AppShellConfig.headerHeight}px;
`);
