import { Header, Footer } from "./StyledLayout";
import Logo from "./Logo";
import Weather from "../Weather/Weather";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Logo />
        <Weather />
      </Header>
      {children}
      <Footer>&copy; Copyright</Footer>
    </>
  );
}
