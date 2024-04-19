import PlantPreview from "./PlantPreview";
import styled from "styled-components";

export const PlantListContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1.5rem;
`;

export default function PlantsList({
  session,
  plants,
  handleToggleOwnedPlants,
  mutate,
}) {
  return (
    <PlantListContainer>
      {plants.map((plant) => (
        <PlantPreview
          key={plant._id}
          name={plant.name}
          botanicalName={plant.botanical_name}
          image={plant.image}
          id={plant._id}
          isOwned={plant.isOwned}
          handleToggleOwnedPlants={() => handleToggleOwnedPlants(plant, mutate)}
          session={session}
        />
      ))}
    </PlantListContainer>
  );
}
