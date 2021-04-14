import { motion } from "framer-motion";
import styled from "styled-components";
import { AppShellConfig } from "@/config/app-shell";
import { DevicesConfig } from "@/config/devices";

export const Container = motion(styled.div`
  transition: background-color 0.5s ease;
  width: 70vw;
  display: flex;
  align-items: flex-start;
  padding-top: ${AppShellConfig.headerHeight + 10}px;
  background: var(--bg-color);
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  outline: none;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    width: auto;
    padding-top: 0;
    padding-bottom: 10px;
    background: transparent;
  }
`);
