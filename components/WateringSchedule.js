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

const WaterSpan = styled.span`
  color: turquoise;
`;

export default function WateringSchedule({ plantsToWater, water_need }) {
  return (
    <Watercard>
      <h1>Plants to Water Today</h1>
      <WaterListContainer>
        {plantsToWater.map((plant) => {
          let wateringTime = "";
          switch (plant.water_need) {
            case "Low":
              wateringTime = "Weekly";
              break;
            case "Moderate":
              wateringTime = "Every 2nd day";
              break;
            case "High":
              wateringTime = "Daily";
              break;
            default:
              wateringTime = "Unknown";
          }
          return (
            <StyledWaterLi key={plant.id}>
              Plant: <StyledSpan>{plant.name}</StyledSpan>
              <br />
              water need: <WaterSpan>{wateringTime}</WaterSpan>
            </StyledWaterLi>
          );
        })}
      </WaterListContainer>
    </Watercard>
  );
}
