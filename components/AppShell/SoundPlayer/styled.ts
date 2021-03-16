import styled, { css, keyframes } from "styled-components";

const pulseKeyframes = keyframes`
  to {
    transform: scale(1);
    opacity: 0;
  }
`;
const sharedStyles = css`
  width: var(--root-size);
  height: var(--root-size);
  position: absolute;
  left: calc(50% - var(--root-size) / 2);
  top: calc(50% - var(--root-size) / 2);
  border-radius: 50%;
`;

export const Container = styled.button`
  --container-size: 30px;
  position: relative;
  width: var(--container-size);
  height: var(--container-size);
`;
export const Pivot = styled.span`
  --root-size: 6px;
  ${sharedStyles};
  background-color: var(--primary-color);
`;
export const Pulse = styled.span<{
  isActive: boolean;
}>`
  --root-size: var(--container-size);
  ${sharedStyles};
  border: 2px solid var(--primary-color);
  transform: scale(0);
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  animation-name: ${pulseKeyframes};
  animation-duration: 1.7s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
`;
