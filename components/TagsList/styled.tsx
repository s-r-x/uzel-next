import { DevicesConfig } from "@/config/devices";
import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    margin-right: 10px;
    margin-bottom: 3px;
  }
  a {
    color: var(--primary-color);
  }
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    padding: 4px 0;
    white-space: nowrap;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;
