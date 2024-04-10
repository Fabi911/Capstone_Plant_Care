import PlantPreview from "@/components/PlantPreview";
import { PlantListItem } from "@/components/PlantsList";
import BackArrow from "@/components/MyPlant/BackArrow";
import { PlantListContainer } from "@/components/PlantsList";
import AddPlantLink from "@/components/MyPlant/AddButton";
import Image from "next/image";

export default function OwnedPage({ plants, handleToggleOwnedPlants }) {
  /* const isMyPlant = plants.filter((plant) => plant.isOwned === true); */
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
          if (plant.isOwned) {
            return (
              <PlantListItem key={plant.id}>
                <PlantPreview
                  name={plant.name}
                  botanicalName={plant.botanical_name}
                  image={plant.image}
                  id={plant.id}
                  isOwned={plant.isOwned}
                  handleToggleOwnedPlants={() =>
                    handleToggleOwnedPlants(plant.id)
                  }
                />
              </PlantListItem>
            );
          }
        })}
      </PlantListContainer>
    </>
  );
}
