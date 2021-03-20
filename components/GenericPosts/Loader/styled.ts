import styled from "styled-components";
import { DevicesConfig } from "@/config/devices";

export const Container = styled.div`
  width: 512px;
  min-width: 512px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    min-width: auto;
    width: auto;
  }
`;
