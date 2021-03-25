import { motion } from "framer-motion";
import styled from "styled-components";
import { AppShellConfig } from "@/config/app-shell";
import { DevicesConfig } from "@/config/devices";

export const Container = motion(styled.div`
  background: var(--bg-color);
  width: 70vw;
  display: flex;
  padding-top: ${AppShellConfig.headerHeight + 10}px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    width: auto;
    padding-top: 0;
    padding-bottom: 10px;
    background: transparent;
  }
`);
