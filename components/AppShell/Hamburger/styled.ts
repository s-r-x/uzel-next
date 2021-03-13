import styled from "styled-components";

export const Container = styled.button`
  span {
    display: block;
    width: 20px;
    height: 2px;
    margin-bottom: 5px;
    background-color: black;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
