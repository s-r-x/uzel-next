import { motion } from "framer-motion";
import styled from "styled-components";

export const TagsList = motion.custom(styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 30vw;
  justify-content: center;
`);
export const Tag = motion.custom(styled.li`
  margin: 5px;
  background-color: var(--primary-color);
  padding: 5px;
  border-radius: 3px;
  color: white;
  a {
    display: block;
  }
  span {
    padding-right: 5px;
  }
  strong {
    font-weight: 900;
    padding-left: 5px;
    position: relative;
    ::before {
      content: "";
      position: absolute;
      height: 100%;
      background-color: white;
      width: 1px;
      left: 0;
      top: 0;
    }
  }
`);
