import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const Comment = styled.li`
  ul {
    padding-left: 15px;
  }
  p {
    margin: 0;
    margin-top: 5px;
  }
`;
export const Avatar = styled.img`
  width: var(--avatar-size);
  height: var(--avatar-size);
  min-width: var(--avatar-size);
  min-height: var(--avatar-size);
  border-radius: 3px;
`;

export const CommentsCount = styled.strong`
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 10px;
`
export const RespondButton = styled.button`
  margin-top: 2px;
  font-weight: 900;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`