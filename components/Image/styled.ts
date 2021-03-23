import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;
export const Placeholder = styled.img<{
  isLoaded: boolean;
}>`
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.5s ease;
  opacity: ${({ isLoaded }) => (isLoaded ? 0 : 1)};
`;
