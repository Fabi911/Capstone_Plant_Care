import styled from "styled-components";
import Tile from "./Tile";

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

// styled components

const StyledTiles = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 10px;
  min-width: 300px;
  max-width: 960px;
  width: 80vw;

  @media (min-width: 901px) and (max-width: 1200px) {
    width: var(--card-tablet);
  }

  @media (min-width: 1201px) {
    width: var(--card-browser);
  }
`;
