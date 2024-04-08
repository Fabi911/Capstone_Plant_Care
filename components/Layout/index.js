import { Header, Footer } from "./StyledLayout";
import Logo from "./Logo";

export default function Layout({ childrens }) {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      {childrens}
      <Footer>Impressum</Footer>
    </>
  );
}
