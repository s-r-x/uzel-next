import { AppShellConfig } from "@/config/app-shell";
import { motion } from "framer-motion";
import styled from "styled-components";
import { DevicesConfig } from "@/config/devices";

export const Container = motion(styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: inherit;
  padding: 10px 30px;
  z-index: 10;
  height: ${AppShellConfig.headerHeight}px;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`);
export const SiteTitle = styled.span`
  margin-left: 5px;
  font-weight: 900;
`;
