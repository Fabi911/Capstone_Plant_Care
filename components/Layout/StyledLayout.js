import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3.5rem;
  background: var(--main-color1);
  //background: black;
  width: 100vw;
  color: white;
  box-shadow: 0 1px 2px 2px var(--box-shadow);
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 2.2rem;
  background: var(--main-color2);
  width: 100vw;
  font-size: 22px;
  box-shadow: 0 1px 2px 2px var(--box-shadow);
`;
