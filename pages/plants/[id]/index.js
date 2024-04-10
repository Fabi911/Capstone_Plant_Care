import { useRouter } from "next/router";
import PlantDetail from "@/components/PlantDetail";
import { uid } from "uid";
import Image from "next/image";
import BackArrow from "@/components/MyPlant/BackArrow";
import styled from "styled-components";

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

      <GalleryContainer>
        <h2>Gallery</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="image">choose image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            required
          />
          <button type="submit">Upload</button>
        </form>
        <br></br>
        <GalleryImageContainer>
          {Array.isArray(plantDetail.gallery) &&
            plantDetail.gallery.length > 0 &&
            plantDetail.gallery.map((url) => (
              <GalleryImage
                key={uid()}
                src={url}
                sizes="20vh"
                style={{
                  width: "40%",
                  height: "auto",
                }}
                width={400}
                height={400}
                alt="Description"
              />
            ))}
        </GalleryImageContainer>
      </GalleryContainer>
    </>
  );
}

// styled components

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  background: var(--main-color3);
  box-shadow: var(--box-shadow-default);
  border-radius: 15px;
  padding-bottom: 15px;
  gap: 10px;
  width: 80vw;
  align-items: center;
`;

const GalleryImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 70vw;
  justify-content: space-around;
`;

const GalleryImage = styled(Image)`
  border-radius: 10px;
  box-shadow: var(--box-shadow-default);
`;
