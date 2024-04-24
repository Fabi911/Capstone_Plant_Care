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
      </Header>
      {children}
      <Footer>
        <div>
          <Login />
        </div>
      </Footer>
    </>
  );
}

const WeatherBox = styled.div`
  position: absolute;
  right: 18px;
  top: 5px;
`;
