import styled from "styled-components";

export default function WateringSchedule({ plantsToWater }) {
  return (
    <Watercard>
      <h1>Plants to Water</h1>


      {plantsToWater.map((plant) => {
        const wateringTime = wateringSchedule[plant.water_need] || "Unknown";
        return (
          <StyledWater key={plant._id}>
            Plant: <StyledSpan>{plant.name}</StyledSpan>
            <br />
            water need: <WaterSpan>{wateringTime}</WaterSpan>
          </StyledWater>
        );
      })}


    </Watercard>
  );
}

// styled components

const Watercard = styled.div`
  background: var(--main-color3);
  padding: 15px;
  border-radius: 15px;
  box-shadow: var(--box-shadow-default);
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  gap: 10px;

  min-width: 300px;
  max-width: 960px;

  @media (min-width: 901px) and (max-width: 1200px) {
    width: var(--card-tablet);
  }

  @media (min-width: 1201px) {
    width: var(--card-browser);
  }
`;

const StyledWater = styled.div`
  box-shadow: 1px 1px 1px var(--box-shadow);
  width: 80%;
  list-style: none;
  background-color: var(--main-color1);
  padding: 5px;
  border-radius: 5px;
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
