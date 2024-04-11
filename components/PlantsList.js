import PlantPreview from "./PlantPreview";
import styled from "styled-components";

export const PlantListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const PlantListItem = styled.div`
  list-style: none;
`;

export default function PlantsList({ plants, handleToggleOwnedPlants }) {
  return (
    <PlantListContainer>
      {plants.map((plant) => (
        <PlantListItem key={plant.id}>
          <PlantPreview
            name={plant.name}
            botanicalName={plant.botanical_name}
            image={plant.image}
            id={plant.id}
            isOwned={plant.isOwned}
            handleToggleOwnedPlants={() => handleToggleOwnedPlants(plant.id)}
          />
        </PlantListItem>
      ))}
    </PlantListContainer>
  );
}
