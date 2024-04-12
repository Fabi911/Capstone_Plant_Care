import PlantPreview from "./PlantPreview";
import styled from "styled-components";

export const PlantListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export default function PlantsList({ plants, handleToggleOwnedPlants }) {
  return (
    <PlantListContainer>
      {plants.map((plant) => (
        <PlantPreview
          key={plant.id}
          name={plant.name}
          botanicalName={plant.botanical_name}
          image={plant.image}
          id={plant.id}
          isOwned={plant.isOwned}
          handleToggleOwnedPlants={() => handleToggleOwnedPlants(plant.id)}
        />
      ))}
    </PlantListContainer>
  );
}
