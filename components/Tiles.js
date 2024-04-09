import styled from "styled-components";
import Tile from "./Tile";

const StyledTiles = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 10px;
`;

export default function Tiles({ landingData }) {
  return (
    <StyledTiles>
      {landingData.map((data) => (
        <Tile
          key={data.id}
          icon={data.icon}
          name={data.name}
          link={data.link}
        ></Tile>
      ))}
    </StyledTiles>
  );
}
