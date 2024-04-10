import styled from "styled-components";

export default function WateringSchedule({ plantsToWater }) {
  return (
    <Watercard>
      <h1>Plants to Water</h1>
      <WaterListContainer>
        {plantsToWater.map((plant) => {
          const wateringTime = wateringSchedule[plant.water_need] || "Unknown";
          return (
            <StyledWater key={plant.id}>
              Plant: <StyledSpan>{plant.name}</StyledSpan>
              <br />
              water need: <WaterSpan>{wateringTime}</WaterSpan>
            </StyledWater>
          );
        })}
      </WaterListContainer>
    </Watercard>
  );
}

// styled components

const Watercard = styled.div`
  background: var(--main-color3);
  padding: 15px;
  border-radius: 15px;
  box-shadow: 2px 2px 2px var(--box-shadow);
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
`;

const StyledWater = styled.div`
  box-shadow: 1px 1px 1px var(--box-shadow);
  width: 65vw;
  list-style: none;
  background-color: var(--main-color1);
  padding: 5px;
  border-radius: 5px;
`;

const WaterListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const WaterSpan = styled.span`
  font-weight: bold;
`;

const wateringSchedule = {
  Low: "Weekly",
  Moderate: "Every 2nd day",
  High: "Daily",
};
