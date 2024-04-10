import PlantsList from "@/components/PlantsList";
import BackArrow from "@/components/MyPlant/BackArrow";
import AddPlantLink from "@/components/MyPlant/AddButton";

export default function Overview({ plants, handleToggleOwnedPlants }) {
  return (
    <>
      <BackArrow link="/" />

      <AddPlantLink />
      <PlantsList
        plants={plants}
        handleToggleOwnedPlants={handleToggleOwnedPlants}
      ></PlantsList>
    </>
  );
}
