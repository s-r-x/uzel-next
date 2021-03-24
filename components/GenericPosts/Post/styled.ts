import styled from "styled-components";
import { DevicesConfig } from "@/config/devices";
import { Button } from "_c/Button";

export const Container = styled.div`
  margin-bottom: 50px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    margin-bottom: 40px;
  }
`;
export const Header = styled.h2`
  margin: 0;
  margin-top: 12px;
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 24px;
  @media (max-width: ${DevicesConfig.mobileBreakpoint}px) {
    font-size: 18px;
  }
`;
export const Excerpt = styled.p`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 2px;
  line-height: 150%;
`;
export const Meta = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
`;
export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14px;
  font-weight: 400;
  > span {
    margin-left: 5px;
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3px;
`;
export const Tag = styled.a`
  color: var(--primary-color);
  margin-right: 10px;
  margin-bottom: 3px;
`;

export const PostLink = styled(Button).attrs({
  as: "a",
})`
  margin-top: 10px;
`;
