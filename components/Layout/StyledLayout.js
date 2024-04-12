import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 3.5rem;
  background: var(--main-color1);
  width: 100vw;
  color: white;
  box-shadow: 0 1px 2px 2px var(--box-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
`;

export const Footer = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  height: 2.2rem;
  background: var(--main-color2);
  width: 100vw;
  font-size: 22px;
  box-shadow: 0 1px 2px 2px var(--box-shadow);
  min-width: 300px;
`;
