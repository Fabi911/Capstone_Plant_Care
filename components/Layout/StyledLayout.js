import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 3.5rem;
  background: #fff;
  width: 100vw;
  /* color: white; */
  box-shadow: 0.5px 0.5px 0.5px 0.5px #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  min-width: 300px;
  opacity: 0.85;
`;

export const Footer = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  height: 2.2rem;
  background: #101015;
  color: white;
  width: 100vw;
  font-size: 1rem;
  /* box-shadow: 0 1px 2px 2px #202020; */
  min-width: 300px;
  opacity: 0.95;
`;
