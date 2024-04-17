import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Tile({ link, name, icon }) {
  return (
    <StyledLink href={link}>
      <StyledTile>
        <StyledIcon src={icon} width={80} height={80} alt={name} />
        <StyledText>{name}</StyledText>
      </StyledTile>
    </StyledLink>
  );
}

// styled components

const StyledTile = styled.div`
  width: 130px;
  height: 130px;
  background: var(--main-color3);
  border-radius: 10px;
  box-shadow: var(--box-shadow-default);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;

const StyledIcon = styled(Image)`
  margin-top: 10px;
`;

const StyledText = styled.p`
  color: var(--text-color);
  position: absolute;
  bottom: -5px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
