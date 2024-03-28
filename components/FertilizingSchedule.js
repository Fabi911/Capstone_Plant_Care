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
  color: turquoise;
`;

export default function FertilizingSchedule({ plantsToFertilize }) {
  return (
    <Watercard>
      <h1>Plants to Water Today</h1>
      <WaterListContainer>
        {plantsToFertilize.map((plant) => (
          <StyledWaterLi key={plant.id}>
            plant name: <StyledSpan>{plant.name}</StyledSpan>
            <br />
            fertiliser season:{" "}
            <FertilizeSpan>{plant.fertiliser_season}</FertilizeSpan>
          </StyledWaterLi>
        ))}
      </WaterListContainer>
    </Watercard>
  );
}
