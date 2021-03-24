import { motion } from "framer-motion";
import styled from "styled-components";
import { AppShellConfig } from "@/config/app-shell";
import { DevicesConfig } from "@/config/devices";

export const Container = motion(styled.div`
  background: white;
  width: 70vw;
  display: flex;
  overflow: hidden;
  padding-top: ${AppShellConfig.headerHeight + 10}px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    overflow-y: auto;
    width: auto;
    height: 100%;
    padding-top: 0;
    padding-bottom: 10px;
    background: transparent;
  }
`);
