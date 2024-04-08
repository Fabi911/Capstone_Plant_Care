import { Header, Footer } from "./StyledLayout";
import Logo from "./Logo";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      {children}
      <Footer>Impressum</Footer>
    </>
  );
}
