import styled from "styled-components";
import { DevicesConfig } from "@/config/devices";

export const ThumbContainer = styled.div`
  height: 340px;
  max-height: 340px;
  overflow: hidden;
  min-height: 340px;
  transition: opacity 0.75s ease;
  border-radius: 3px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    max-height: none;
    min-height: auto;
    height: auto;
  }
`;
