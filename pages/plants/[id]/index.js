import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import PlantDetail from "@/components/PlantDetail";

export default function DetailPage({
  plants,
  handleToggleOwnedPlants,
  handleDeletePlant,
}) {
  const router = useRouter();
  const { id } = router.query;
  const plantDetail = plants.find((plant) => plant.id === id);

  if (!plantDetail) return null;

  return (
    <PlantDetail
      plantDetail={plantDetail}
      handleToggleOwnedPlants={handleToggleOwnedPlants}
      handleDeletePlant={handleDeletePlant}
    />
  );
}
