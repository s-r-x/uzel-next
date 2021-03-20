import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .vertical-timeline {
    ::before {
      background: var(--primary-color);
    }
    .vertical-timeline-element {
      &-content {
        color: white;
        font-weight: 500;
        box-shadow: none;
        background-color: var(--primary-color);
      }
      &-date {
        color: black;
      }
      &-icon {
        box-shadow: none;
      }
    }
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;
`;
export const ObservationThumb = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  border-radius: 50%;
`;
