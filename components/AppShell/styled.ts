import { AppShellConfig } from "@/config/app-shell";
import styled from "styled-components";

export const ChildrenContainer = styled.div`
  max-width: var(--layout-width);
  margin: 0 auto;
  padding-top: ${AppShellConfig.headerHeight}px;
`;
