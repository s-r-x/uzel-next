import styled from "styled-components";
import { motion } from "framer-motion";
import { DevicesConfig } from "@/config/devices";
import { AppShellConfig } from "@/config/app-shell";

export const Container = styled.nav`
  width: 30vw;
  position: relative;
  display: flex;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    width: auto;
    flex-shrink: 0;
    padding-top: ${AppShellConfig.headerHeight + 10}px;
  }
`;
export const AnimatedSheet = motion(styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: var(--primary-color);
`);
export const NavItemsList = motion(styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    -webkit-overflow-scrolling: touch;
    flex-direction: row;
    max-width: 100%;
    justify-content: flex-start;
    align-items: center;
    overflow-y: auto;
    padding: 5px;
  }
`);

export const NavItem = motion(styled.li`
  display: flex;
  align-items: center;
  font-weight: 900;
  padding-left: 20px;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
  font-size: 32px;
  button {
    color: white;
    margin-right: 5px;
  }
  :last-child {
    margin-bottom: 0;
  }
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    font-size: 16px;
    margin-bottom: 0;
    padding-left: 0;
    margin-right: 13px;
    button {
      color: inherit;
      margin-right: 2px;
    }
  }
`);
export const ActiveIndicator = motion(styled.div`
  --size: 5px;
  width: var(--size);
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: white;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    --size: 100%;
    top: auto;
    bottom: -2px;
    height: 3px;
    background: var(--content-color);
  }
`);
