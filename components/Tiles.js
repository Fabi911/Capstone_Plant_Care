import styled from "styled-components";
import Tile from "./Tile";
import { uid } from "uid";
import iconHome from "@/img/iconHome.png";

const StyledTiles = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-around;
`;

export default function Tiles() {
  const tilesData = [
    { title: "Tile 1", href: "/page1" },
    { title: "Tile 2", href: "/page2" },
    { title: "Tile 3", href: "/page3" },
  ];
  return (
    <StyledTiles>
      {/* {tilesData.map((tile) => (
        <li key={uid()}> */}
      <Tile icon={iconHome}></Tile>
      <Tile icon={iconHome}></Tile>
      {/* </li> */}
      {/* ))} */}
    </StyledTiles>
  );
}
