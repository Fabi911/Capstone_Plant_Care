import PlantsList from "@/components/PlantsList";

export default function HomePage({ plants, handleToggleOwnedPlants }) {
  return (
    <PlantsList
      plants={plants}
      handleToggleOwnedPlants={handleToggleOwnedPlants}
    ></PlantsList>
  );
}
