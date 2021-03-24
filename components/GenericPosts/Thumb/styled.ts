import styled from "styled-components";
import { DevicesConfig } from "@/config/devices";

export const ThumbContainer = styled.div`
  overflow: hidden;
  min-height: 340px;
  transition: opacity 0.75s ease;
  border-radius: 3px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    min-height: auto;
  }
`;
