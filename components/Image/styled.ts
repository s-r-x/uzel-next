import styled from "styled-components";
import NextImage from "next/image";

export const Container = styled.div`
  position: relative;
`;
export const Image = styled(NextImage)<{
  $isLoaded: boolean;
  layout: string;
}>`
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease;
`;
export const Placeholder = styled.img<{
  isLoaded: boolean;
}>`
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.5s ease;
  opacity: ${({ isLoaded }) => (isLoaded ? 0 : 1)};
  max-width: 100%;
  min-width: 100%;
  max-height: 100%;
  min-height: 100%;
  width: 0px;
  height: 0px;
  inset: 0px;
  border: none;
`;
