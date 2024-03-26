import PlantPreview from "./PlantPreview";
import styled from "styled-components";

const PlantListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const PlantListItem = styled.li`
  list-style: none;
`;

export default function PlantsList({ plants }) {
  return (
    <PlantListContainer>
      {plants.map((plant) => (
        <PlantListItem key={plant.id}>
          <PlantPreview
            name={plant.name}
            botanicalName={plant.botanical_name}
            image={plant.image}
            id={plant.id}
          />
        </PlantListItem>
      ))}
    </PlantListContainer>
  );
}
