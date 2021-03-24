import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 30vw;
  position: relative;
  display: flex;
`;
export const AnimatedSheet = motion(styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: var(--primary-color);
`);
export const NavItemsList = motion(styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`);

export const NavItem = motion(styled.li`
  display: flex;
  align-items: center;
  font-weight: 900;
  padding-left: 20px;
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
export const ActiveIndicator = motion(styled.div`
  --size: 8px;
  --half-size: 4px;
  width: var(--size);
  height: var(--size);
  position: absolute;
  border-radius: 50%;
  left: 5px;
  top: calc(50% - var(--half-size));
  background: white;
`);
