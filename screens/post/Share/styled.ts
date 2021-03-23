import styled from "styled-components";
import { ShareConfig } from "./config";
import { motion } from "framer-motion";

export const Container = styled.div`
  margin-top: 40px;
  position: relative;
  display: inline-block;
  margin-bottom: 40px;
`;
export const ShareButtonsContainer = motion.custom(styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  > * {
    position: absolute;
    top: calc(50% - ${ShareConfig.btnSize / 2}px);
    left: calc(50% - ${ShareConfig.btnSize / 2}px);
  }
`);
