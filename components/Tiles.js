import styled from "styled-components";
import Tile from "./Tile";
import { uid } from "uid";

const StyledTiles = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Tiles() {
  const tilesData = [
    { title: "Tile 1", href: "/page1" },
    { title: "Tile 2", href: "/page2" },
    { title: "Tile 3", href: "/page3" },
  ];
  return (
    <StyledTiles>
      {tilesData.map((tile) => (
        <li key={uid()}>
          <Tile tilesDate={tilesData}></Tile>
        </li>
      ))}
    </StyledTiles>
  );
}
