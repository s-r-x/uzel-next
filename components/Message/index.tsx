import styled from "styled-components";

export const Message = styled.div`
  border-radius: 3px;
  padding: 15px;
  color: white;
  font-weight: 900;
  background: var(--primary-color);
`;

export const ErrorMessage = styled(Message)`
  background: var(--negative-color);
`;
