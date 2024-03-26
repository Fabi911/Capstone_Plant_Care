import PlantsPreview from "./PlantsPreview";
import styled from "styled-components";

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const StyledLI = styled.li`
  list-style: none;
`;

export default function PlantList({ plants }) {
  return (
    <StyledUL>
      {plants.map((plant) => (
        <StyledLI key={plant.id}>
          <PlantsPreview
            name={plant.name}
            botanical_name={plant.botanical_name}
            image={plant.image}
            id={plant.id}
          />
        </StyledLI>
      ))}
    </StyledUL>
  );
}
