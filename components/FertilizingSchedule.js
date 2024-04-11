import styled from "styled-components";

export default function FertilizingSchedule({ plantsToFertilize }) {
  let fertilizedSeasons;
  return (
    <Fertilisercard>
      <h1>Fertiliser season Plan</h1>
      <FertiliserListContainer>
        {plantsToFertilize.map((plant) => (
          <StyledFertiliser key={plant.id}>
            Plant: <StyledSpan>{plant.name}</StyledSpan>
            <br />
            Fertiliser season:{" "}
            <FertilizeSpan>
              {(fertilizedSeasons = plant.fertiliser_season.join(", "))}
            </FertilizeSpan>
          </StyledFertiliser>
        ))}
      </FertiliserListContainer>
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
`;

const StyledFertiliser = styled.div`
  box-shadow: 1px 1px 1px var(--box-shadow);
  width: 65vw;
  background-color: var(--main-color1);
  padding: 5px;
  border-radius: 5px;
`;

const FertiliserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const FertilizeSpan = styled.span`
  font-weight: bold;
`;
