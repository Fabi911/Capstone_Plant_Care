import PlantsList from "@/components/PlantsList";
import BackArrow from "@/components/MyPlant/BackArrow";
import AddPlantLink from "@/components/MyPlant/AddPlantLink";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

export default function Overview({ handleToggleOwnedPlants }) {
  const { data: session } = useSession();
  const { data, mutate } = useSWR("/api/plants", { fallbackData: [] });

  return (
    <>
      <BackArrow link="/" />
      <Image
        src="/img/iconOverview.png"
        width={80}
        height={80}
        alt="IconFertilizing"
      />
      {session && <AddPlantLink />}
      <PlantsList
        plants={data}
        handleToggleOwnedPlants={handleToggleOwnedPlants}
        mutate={mutate}
        session={session}
      />
    </>
  );
}
