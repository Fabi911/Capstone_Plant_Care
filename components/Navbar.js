import Link from "next/link";
import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100vw;
  gap: 30px;
  position: fixed;
  background-color: #202020;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 1;
  left: 0;
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledLink href="/">Overview</StyledLink>
      <StyledLink href="/ownedPage">My Plants</StyledLink>
      <StyledLink href="/reminder">My Reminder</StyledLink>
    </StyledNavbar>
  );
}
