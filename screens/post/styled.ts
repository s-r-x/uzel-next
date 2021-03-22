import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  img {
    max-width: 100%;
  }
  p {
    line-height: 1.45;
  }
`;
export const Header = styled.header`
  margin-top: 75px;
  margin-bottom: 40px;
  text-align: center;
`;
export const Title = motion.custom(styled.h1`
  font-weight: 900;
  font-size: 41px;
  margin: 0;
  font-family: var(--font-secondary);
  perspective: 2000;
  margin-bottom: 3px;
`);
export const Date = styled.time`
  font-weight: 400;
`;
export const TitleWord = styled.span`
  display: inline-flex;
`;
export const TitleLetter = motion.custom(styled.span`
  transform-style: preserve-3d;
  display: inline-flex;
`);
