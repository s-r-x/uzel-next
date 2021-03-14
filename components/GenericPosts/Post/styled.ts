import styled from "styled-components";

export const Container = styled.div`
  width: 582px;
  min-width: 582px;
  padding: 0 35px;
`;
export const Header = styled.h2`
  margin: 0;
  margin-top: 12px;
  font-weight: 900;
  font-size: 26px;
`;
export const Excerpt = styled.p`
  margin: 0;
  margin-top: 15px;
  line-height: 150%;
`;
export const Meta = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;
export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14px;
  font-weight: 500;
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
  font-weight: 500;
  margin-right: 10px;
  margin-bottom: 3px;
`;
