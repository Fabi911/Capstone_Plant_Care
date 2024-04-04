import { useRouter } from "next/router";
import PlantDetail from "@/components/PlantDetail";

import { uid } from "uid";
import useSWR from "swr";
import { CldImage } from "next-cloudinary";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailPage({
  plants,
  handleToggleOwnedPlants,
  handleDeletePlant,
}) {
  const router = useRouter();
  const { id } = router.query;
  const plantDetail = plants.find((plant) => plant.id === id);

  const { data, error, isLoading } = useSWR("/api/cloudinary", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const imageUrls = data;
  console.log("dfdf", data);

  if (!plantDetail) return null;
  return (
    <>
      <PlantDetail
        plantDetail={plantDetail}
        handleToggleOwnedPlants={handleToggleOwnedPlants}
        handleDeletePlant={handleDeletePlant}
      />
      {imageUrls.map((url) => (
        <CldImage
          key={uid()}
          width="960"
          height="600"
          src={url}
          sizes="20vw"
          alt="Description of my image"
        />
      ))}
    </>
  );
}
