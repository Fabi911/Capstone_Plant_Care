import PlantPreview from "@/components/PlantPreview";
import BackArrow from "@/components/MyPlant/BackArrow";
import { PlantListContainer } from "@/components/PlantsList";
import AddPlantLink from "@/components/MyPlant/AddPlantLink";
import Image from "next/image";

export default function OwnedPage({ plants, handleToggleOwnedPlants }) {
  return (
    <>
      <BackArrow link="/" />
      <Image
        src="/img/iconOwned.png"
        width={80}
        height={80}
        alt="IconFertilizing"
      />
      <AddPlantLink />
      <PlantListContainer>
        {plants.map((plant) => {
          return (
            plant.isOwned && (
              <PlantPreview
                key={plant.id}
                name={plant.name}
                botanicalName={plant.botanical_name}
                image={plant.image}
                id={plant.id}
                isOwned={plant.isOwned}
                handleToggleOwnedPlants={() =>
                  handleToggleOwnedPlants(plant.id)
                }
              />
            )
          );
        })}
      </PlantListContainer>
    </>
  );
}
