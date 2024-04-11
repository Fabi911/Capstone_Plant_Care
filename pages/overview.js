import PlantsList from "@/components/PlantsList";
import BackArrow from "@/components/MyPlant/BackArrow";
import AddPlantLink from "@/components/MyPlant/AddPlantLink";
import Image from "next/image";

export default function Overview({ plants, handleToggleOwnedPlants }) {
  return (
    <>
      <BackArrow link="/" />
      <Image
        src="/img/iconOverview.png"
        width={80}
        height={80}
        alt="IconFertilizing"
      />
      <AddPlantLink />
      <PlantsList
        plants={plants}
        handleToggleOwnedPlants={handleToggleOwnedPlants}
      ></PlantsList>
    </>
  );
}
