import { AppShellConfig } from "@/config/app-shell";
import { DevicesConfig } from "@/config/devices";
import styled from "styled-components";

export const ChildrenContainer = styled.div`
  max-width: var(--layout-width);
  margin: 0 auto;
  padding-top: ${AppShellConfig.headerHeight}px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
