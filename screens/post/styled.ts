import { DevicesConfig } from "@/config/devices";
import styled from "styled-components";

export const Container = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
  p {
    line-height: 1.45;
  }
  figure {
    margin-left: 0;
    margin-right: 0;
  }
  iframe {
    max-width: 100%;
  }
`;
export const Category = styled.div`
  color: var(--primary-color);
  &::before {
    content: "- ";
  }
  &::after {
    content: " -";
  }
`;
export const Header = styled.header`
  margin-top: 65px;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    margin-top: 15px;
  }
`;

export const Date = styled.time`
`;
