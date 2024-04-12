import PlantPreview from "./PlantPreview";
import styled from "styled-components";

export const PlantListContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1.5rem;
`;

export const PlantListItem = styled.div`
  list-style: none;
`;

export default function PlantsList({
  plants,
  handleToggleOwnedPlants,
  mutate,
}) {
  return (
    <PlantListContainer>
      {plants.map((plant) => (
        <PlantListItem key={plant._id}>
          <PlantPreview
            name={plant.name}
            botanicalName={plant.botanical_name}
            image={plant.image}
            id={plant._id}
            isOwned={plant.isOwned}
            handleToggleOwnedPlants={() =>
              handleToggleOwnedPlants(plant, mutate)
            }
          />
        </PlantListItem>
      ))}
    </PlantListContainer>
  );
}
