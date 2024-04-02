import styled from "styled-components";

const Watercard = styled.div`
  border: 1px solid black;
`;

const StyledWaterLi = styled.li`
  border: 1px solid black;
  width: 80%;
  list-style: none;
  background-color: #303030;
  padding: 5px;
  border-radius: 5px;
`;

const WaterListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledSpan = styled.span`
  color: yellow;
`;

const FertilizeSpan = styled.span`
  color: brown;
`;

export default function FertilizingSchedule({ plantsToFertilize }) {
  return (
    <Watercard>
      <h1>Fertiliser season plan</h1>
      <WaterListContainer>
        {plantsToFertilize.map((plant) => (
          <StyledWaterLi key={plant.id}>
            Plant: <StyledSpan>{plant.name}</StyledSpan>
            <br />
            fertiliser season:{" "}
            {/* if there are more than two strings, they are separated by a comma */}
            {plant.fertiliser_season.map((season, index, id) => (
              <FertilizeSpan key={id}>
                {season}
                {index !== plant.fertiliser_season.length - 1 ? ", " : ""}
              </FertilizeSpan>
            ))}
          </StyledWaterLi>
        ))}
      </WaterListContainer>
    </Watercard>
  );
}
