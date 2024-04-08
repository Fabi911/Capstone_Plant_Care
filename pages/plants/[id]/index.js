import { useRouter } from "next/router";
import PlantDetail from "@/components/PlantDetail";
import { uid } from "uid";
import Image from "next/image";

export default function DetailPage({
  plants,
  handleToggleOwnedPlants,
  handleDeletePlant,
  handleEditPlant,
}) {
  const router = useRouter();
  const { id } = router.query;
  const plantDetail = plants.find((plant) => plant.id === id);
  if (!plantDetail) return null;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const { url } = await response.json();

    handleEditPlant({ ...plantDetail, gallery: [...plantDetail.gallery, url] });
  }
  if (!plantDetail) return null;

  return (
    <>
      <PlantDetail
        plantDetail={plantDetail}
        handleToggleOwnedPlants={handleToggleOwnedPlants}
        handleDeletePlant={handleDeletePlant}
        handleEditPlant={handleEditPlant}
      />
      <h2>Add more images</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">choose image</label>
        <input type="file" id="image" name="image" accept="image/*" required />
        <button type="submit">Upload</button>
      </form>
      <br></br>
      {Array.isArray(plantDetail.gallery) &&
        plantDetail.gallery.length > 0 &&
        plantDetail.gallery.map((url) => (
          <li key={url}>
            <Image
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
