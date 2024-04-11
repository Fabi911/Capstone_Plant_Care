import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Tile({ link, name, icon }) {
  return (
    <Link href={link}>
      <StyledTile>
        <StyledIcon src={icon} width={80} height={80} alt={name} />
        <StyledText>{name}</StyledText>
      </StyledTile>
    </Link>
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
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;

const StyledIcon = styled(Image)`
  margin-top: 10px;
`;

const StyledText = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--text-color);
`;
