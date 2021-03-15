import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion.custom(styled.ul`
  width: 35vw;
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: deeppink;
  padding-left: 20px;
`);

export const NavItem = styled.li<{
  isActive: boolean;
}>`
  font-weight: 900;
  font-size: 32px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
`;
