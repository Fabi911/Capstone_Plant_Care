import { useRouter } from "next/router";
import PlantDetail from "@/components/PlantDetail";
import { uid } from "uid";
import Image from "next/image";
import BackArrow from "@/components/MyPlant/BackArrow";

export default function DetailPage({
  plants,
  handleToggleOwnedPlants,
  handleDeletePlant,

  handleGalleryPlant,

  handleEditPlant,
}) {
  const router = useRouter();
  const { id } = router.query;
  const plantDetail = plants.find((plant) => plant.id === id);
  if (!plantDetail) return null;

  const gallery = plantDetail.gallery || [];

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const imageFile = formData.get("image");

    try {
      const imageUrl = await uploadImage(imageFile);

      const addGalleryImgToDb = {
        ...plantDetail,
        gallery: [...gallery, imageUrl],
      };
      handleGalleryPlant(addGalleryImgToDb);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  function uploadImage(imageFile) {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "gallery-plant");

    return fetch("https://api.cloudinary.com/v1_1/ddqqfiwvi/image/upload", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to upload image");
        }

        const data = await response.json();
        return data.secure_url;
      })
      .catch((error) => {
        console.error("Error uploading image to Cloudinary:", error);
        throw error;
      });
  }
  if (!plantDetail) return null;

  return (
    <>
      <BackArrow link="/overview" />
      <PlantDetail
        plantDetail={plantDetail}
        handleToggleOwnedPlants={handleToggleOwnedPlants}
        handleDeletePlant={handleDeletePlant}
        handleEditPlant={handleEditPlant}
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">choose image</label>
        <input type="file" id="image" name="image" accept="image/*" required />
        <button type="submit">Upload</button>
      </form>
      <br></br>
      {Array.isArray(plantDetail.gallery) &&
        plantDetail.gallery.length > 0 &&
        plantDetail.gallery.map((url) => (
          <li key={uid()}>
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
