import styled from "styled-components";

export const Container = styled.form`
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
