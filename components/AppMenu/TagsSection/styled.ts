import { motion } from "framer-motion";
import styled from "styled-components";
import { DevicesConfig } from "@/config/devices";

export const TagsList = motion(styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 30vw;
  margin: auto;
  justify-content: center;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    max-width: none;
    padding: 5px;
    justify-content: flex-start;
    margin: 0;
  }
`);
export const Tag = motion(styled.li`
  margin: 5px;
  background-color: var(--primary-color);
  padding: 5px;
  border-radius: 3px;
  a {
    display: block;
  }
  * {
    color: white;
  }
  span {
    padding-right: 5px;
  }
  strong {
    font-weight: 900;
    padding-left: 5px;
    position: relative;
    ::before {
      content: "";
      position: absolute;
      height: 100%;
      background-color: white;
      width: 1px;
      left: 0;
      top: 0;
    }
  }
`);
