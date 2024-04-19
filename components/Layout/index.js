import { Header, Footer } from "./StyledLayout";
import Logo from "./Logo";

import Weather from "../Weather/Weather";

import Login from "../login";

import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Logo />

        <WeatherBox>
          <Weather />
        </WeatherBox>

        <LoginBox>
          <Login />
        </LoginBox>

      </Header>
      {children}
      <Footer>&copy; Copyright</Footer>
    </>
  );
}


const WeatherBox = styled.div`
  position: absolute;
  left: 45px;

const LoginBox = styled.div`
  position: absolute;
  right: 10px;

`;
