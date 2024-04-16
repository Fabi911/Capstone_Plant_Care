import { useRouter } from "next/router";
import useSWR from "swr";
import PlantDetail from "@/components/PlantDetail";
import { uid } from "uid";
import Image from "next/image";
import BackArrow from "@/components/MyPlant/BackArrow";
import styled from "styled-components";
import { toast } from "react-toastify";

export default function DetailPage({
  handleToggleOwnedPlants,
  handleDeletePlant,
  handleEditPlant,
  handleAddGalleryImage,
}) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: plant, isLoading, error, mutate } = useSWR(`/api/plants/${id}`);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await toast.promise(
      fetch("/api/upload", {
        method: "POST",
        body: formData,
      }),
      {
        pending: "Upload is pending",
        error: "Upload rejected 🤯",
      }
    );

    const { url } = await response.json();

    const imageData = {
      ...plant,
      gallery: [...plant.gallery, url],
    };

    handleAddGalleryImage(imageData, id, mutate);
  }
  if (!plant) return null;

  return (
    <>
      <BackArrow link="/overview" />
      <PlantDetail
        plantDetail={plant}
        handleToggleOwnedPlants={handleToggleOwnedPlants}
        handleDeletePlant={handleDeletePlant}
        handleEditPlant={handleEditPlant}
        mutate={mutate}
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
          {Array.isArray(plant.gallery) &&
            plant.gallery.length > 0 &&
            plant.gallery.map((url) => (
              <GalleryImage
                key={uid()}
                src={url}
                sizes="30vw"
                style={{
                  width: "auto",
                  height: "50%",
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
  min-width: 300px;
  max-width: 960px;
  align-items: center;
  @media (min-width: 901px) and (max-width: 1200px) {
    width: var(--card-tablet);
  }

  @media (min-width: 1201px) {
    width: var(--card-browser);
  }
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
