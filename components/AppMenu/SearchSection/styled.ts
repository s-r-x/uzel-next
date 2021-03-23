import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 50%;
  position: relative;
`;
export const Input = styled.input`
  padding: 10px;
  padding-left: 0;
  padding-top: 0;
  border: none;
  outline: none;
  font-size: 42px;
  font-weight: 900;
`;
export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
export const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--content-color);
  height: 4px;
`;
export const BottomLineFocused = motion.custom(styled(BottomLine)`
  background-color: var(--primary-color);
`);
