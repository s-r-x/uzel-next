import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = motion(styled.button`
  position: relative;
  width: 50px;
  height: 30px;
  border-radius: 24px;
`);
export const Toggler = motion(styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  left: 0;
`);
export const Day = motion(styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: white;
`);
