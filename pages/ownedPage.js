import PlantPreview from "@/components/PlantPreview";
import BackArrow from "@/components/MyPlant/BackArrow";
import { PlantListContainer } from "@/components/PlantsList";
import AddPlantLink from "@/components/MyPlant/AddPlantLink";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

export default function OwnedPage({ handleToggleOwnedPlants }) {
  const { data: session } = useSession();
  const { data, mutate } = useSWR("/api/plants", { fallbackData: [] });

  return (
    <>
      <BackArrow link="/" />
      <Image
        src="/img/iconOwned.png"
        width={80}
        height={80}
        alt="IconFertilizing"
      />
      {session && <AddPlantLink />}
      <PlantListContainer>
        {data.map((plant) => {
          return (
            plant.isOwned && (
              <PlantPreview
                key={plant._id}
                name={plant.name}
                botanicalName={plant.botanical_name}
                image={plant.image}
                id={plant._id}
                isOwned={plant.isOwned}
                handleToggleOwnedPlants={() =>
                  handleToggleOwnedPlants(plant, mutate)
                }
              />
            )
          );
        })}
      </PlantListContainer>
    </>
  );
}
