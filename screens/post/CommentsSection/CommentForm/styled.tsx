import styled from "styled-components";

export const Container = styled.form`
  margin-top: 15px;
  input,
  label {
    display: block;
  }
  label {
    font-weight: 900;
    margin-bottom: 5px;
  }
  input,
  textarea {
    border-radius: 3px;
    padding: 10px;
    width: 100%;
    border: 1px solid var(--content-color);
    outline-color: var(--primary-color);
  }
`;
export const FieldContainer = styled.div`
  margin-bottom: 10px;
`;
export const RespondTarget = styled.div`
  img {
    width: var(--avatar-size);
    height: var(--avatar-size);
    min-width: var(--avatar-size);
    min-height: var(--avatar-size);
    border-radius: 3px;
  }
  strong {
    font-weight: 900;
  }
  button {
    color: var(--negative-color);
    font-weight: 900;
    margin-left: 10px;
  }
`;
