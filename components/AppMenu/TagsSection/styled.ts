import styled from "styled-components";

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 30vw;
  justify-content: center;
  li {
    margin: 5px;
  }
  a {
    color: var(--primary-color);
  }
  strong {
    font-weight: 900;
  }
`;
