import PlantPreview from "@/components/PlantPreview";
import { PlantListItem } from "@/components/PlantsList";
import BackArrow from "@/components/MyPlant/BackArrow";
import { PlantListContainer } from "@/components/PlantsList";
import AddPlantLink from "@/components/MyPlant/AddPlantLink";
import Image from "next/image";
import useSWR from "swr";

export default function OwnedPage({ handleToggleOwnedPlants }) {
  const { data, mutate } = useSWR("/api/plants", { fallbackData: [] });
  console.log(data);
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
        {data.map((plant) => {
          return (
            plant.isOwned && (
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
            )
          );
        })}
      </PlantListContainer>
    </>
  );
}
