import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 3.8rem;
  background-color: #fdfefe;
  /* background: url("/img/header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: top; */
  width: 100vw;
  color: white;
  box-shadow: 2px 5px 30px lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  min-width: 300px;
`;

export const Footer = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  height: 3%.2;
  background: #303030;
  box-shadow: -1px -1px 10px #888888;
  /* background-image: url("/img/footer.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 20%; */
  width: 100vw;
  font-size: 22px;
  min-width: 300px;
  color: white;
`;

export const BgContainer = styled.div``;
