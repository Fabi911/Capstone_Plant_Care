import { Header, Footer } from "./StyledLayout";
import Logo from "./Logo";
import Weather from "../Weather/Weather";
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
      <Footer>&copy; Copyright</Footer>
    </>
  );
}

const WeatherBox = styled.div`
  position: absolute;
  left: 45px;
`;
