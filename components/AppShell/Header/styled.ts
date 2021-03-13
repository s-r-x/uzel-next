import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion.custom(styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 10px 30px;
  z-index: 2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`);
export const SiteTitle = styled.span`
  margin-left: 5px;
  font-weight: 900;
`;
