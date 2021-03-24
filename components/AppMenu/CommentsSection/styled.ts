import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
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
