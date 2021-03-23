import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  background: var(--primary-color);
  color: white;
  font-weight: 900;
  padding: 10px 30px;
`;

export const CircleButton = styled.button`
  --btn-size: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  width: var(--btn-size);
  height: var(--btn-size);
  border-radius: 50%;
  color: white;
  font-weight: 900;
`;
