import { motion } from "framer-motion";
import styled from "styled-components";
import { DevicesConfig } from "@/config/devices";

export const Container = styled.div`
  margin: auto;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    padding: 5px;
    margin: 0;
  }
`;
export const CommentsList = motion(styled.ul`
  display: flex;
  flex-direction: column;
`);
export const Comment = motion(styled.li`
  margin-bottom: 15px;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  color: white;
  padding: 15px;
  border-radius: 3px;
`);
