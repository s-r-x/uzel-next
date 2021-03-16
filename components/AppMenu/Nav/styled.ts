import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.ul`
  width: 30vw;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 20px;
`;
export const AnimatedSheet = motion.custom(styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: var(--primary-color);
`);

export const NavItem = motion.custom(styled.li<{
  isActive: boolean;
}>`
  display: flex;
  align-items: center;
  font-weight: 900;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
  font-size: 32px;
  color: white;
  :last-child {
    margin-bottom: 0;
  }
  button {
    margin-right: 5px;
  }
`);
