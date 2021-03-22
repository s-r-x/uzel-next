import styled from "styled-components";
import { DevicesConfig } from "@/config/devices";

export const ThumbContainer = styled.div<{
  isVisible: boolean;
}>`
  height: 340px;
  max-height: 340px;
  overflow: hidden;
  position: relative;
  min-height: 340px;
  transition: opacity 0.75s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  border-radius: 3px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    max-height: none;
    min-height: auto;
    height: auto;
  }
`;
