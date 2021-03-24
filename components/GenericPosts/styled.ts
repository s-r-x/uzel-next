import styled from "styled-components";
import { DevicesConfig } from "@/config/devices";

export const Container = styled.div`
  display: flex;
  max-width: 768px;
  margin: 0 auto;
  padding-top: 30px;
  flex-direction: column;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    padding: 15px;
  }
`;
