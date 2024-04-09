import styled from "styled-components";

const Fertilisercard = styled.div`
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

const StyledFertiliser = styled.div`
  box-shadow: 1px 1px 1px var(--box-shadow);
  width: 65vw;
  list-style: none;
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

export default function FertilizingSchedule({ plantsToFertilize }) {
  return (
    <Fertilisercard>
      <h1>Fertiliser season Plan</h1>
      <FertiliserListContainer>
        {plantsToFertilize.map((plant) => (
          <StyledFertiliser key={plant.id}>
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
          </StyledFertiliser>
        ))}
      </FertiliserListContainer>
    </Fertilisercard>
  );
}
