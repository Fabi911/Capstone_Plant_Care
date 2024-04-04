import { useRouter } from "next/router";
import PlantDetail from "@/components/PlantDetail";
import { CldUploadWidget } from "next-cloudinary";

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

  console.log("data", data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  if (!plantDetail) return null;
  return (
    <>
      <PlantDetail
        plantDetail={plantDetail}
        handleToggleOwnedPlants={handleToggleOwnedPlants}
        handleDeletePlant={handleDeletePlant}
      />
      <CldUploadWidget uploadPreset="gallery-plant">
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
      <br></br>
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((url) => (
          <li key={uid()}>
            <CldImage
              width="200"
              height="160"
              src={url}
              sizes="(max-width: 768px) 20vw,
          (max-width: 1200px) 50vw,
          100vw"
              alt="Description"
            />
          </li>
        ))}
    </>
  );
}
