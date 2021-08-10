import styled from "styled-components";

export const Container = styled.div`
  margin-top: 25px;
`;
export const Header = styled.strong`
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 15px;
  display: block;
`;

export const Thumb = styled.img`
  --width: 64px;
  --height: 64px;
  width: var(--width);
  min-width: var(--width);
  height: var(--height);
  min-height: var(--height);
  object-fit: cover;
  background-color: var(--primary-color);
  border-radius: 50%;
  margin-right: 10px;
`;

export const Observation = styled.a`
  display: flex;
  margin-bottom: 10px;
  strong {
    margin-top: 5px;
    display: block;
    font-weight: 900;
  }
  time {
    font-size: 14px;
  }
`