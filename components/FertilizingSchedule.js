import styled from "styled-components";

export default function FertilizingSchedule({ plantsToFertilize }) {
  return (
    <Fertilisercard>
      <h1>Fertiliser season Plan</h1>

      {plantsToFertilize.map((plant) => (
        <StyledFertiliser key={plant.id}>
          Plant: <StyledSpan>{plant.name}</StyledSpan>
          <br />
          Fertiliser season:{" "}
          <FertilizeSpan>{plant.fertiliser_season.join(", ")}</FertilizeSpan>
        </StyledFertiliser>
      ))}
    </Fertilisercard>
  );
}

// styled components

const Fertilisercard = styled.div`
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

const StyledFertiliser = styled.div`
  box-shadow: 1px 1px 1px var(--box-shadow);
  width: 80%;
  background-color: var(--main-color1);
  padding: 5px;
  border-radius: 5px;
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const FertilizeSpan = styled.span`
  font-weight: bold;
`;
