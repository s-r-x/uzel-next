import styled from "styled-components";

export const ObservationsList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const Observation = styled.li`
  margin-bottom: 5px;
  a {
    display: flex;
  }
  img {
    width: 75px;
    height: 75px;
    margin-right: 10px;
    border-radius: 3px;
    background-color: var(--primary-color);
  }
`;
export const ObservationMeta = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: var(--primary-color);
    font-weight: 900;
  }
  time {
    font-size: 14px;
  }
`;
