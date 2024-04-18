import { Header, Footer } from "./StyledLayout";
import Logo from "./Logo";
import Login from "../login";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Logo />
        <LoginBox>
          <Login />
        </LoginBox>
      </Header>
      {children}
      <Footer>&copy; Copyright</Footer>
    </>
  );
}

const LoginBox = styled.div`
  position: absolute;
  right: 10px;
`;
