import { useRouter } from "next/router";
import useSWR from "swr";
import PlantDetail from "@/components/PlantDetail";
import { uid } from "uid";
import Image from "next/image";
import BackArrow from "@/components/MyPlant/BackArrow";
import styled from "styled-components";

import { useState } from "react";
import ConfirmDelete from "@/components/ConfirmDelete";

import { toast } from "react-toastify";
import Modal from "@/components/Modal";

export default function DetailPage({
  handleToggleOwnedPlants,
  handleDeletePlant,
  handleEditPlant,
  handleAddNotes,
  handleDeleteImage,
  handleAddGalleryImage,
}) {
  const [IndexImage, setIndexImage] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
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
    event.target.reset();

    handleAddGalleryImage(imageData, id, mutate);
  }
  if (!plant) return null;

  // Delete Image from Gallery
  function handleDelete(index) {
    setConfirmDelete(index);
  }

  function handleCancel() {
    setConfirmDelete(null);
  }

  const onClickDeleteImage = (index) => {
    const updatedGallery = [...plant.gallery];
    updatedGallery.splice(index, 1);
    plant.gallery = updatedGallery;
    handleDeleteImage(plant, id, mutate);
    setConfirmDelete(null);
  };

  return (
    <>
      <BackArrow link="/overview" />
      <PlantDetail
        plantDetail={plant}
        handleToggleOwnedPlants={handleToggleOwnedPlants}
        handleDeletePlant={handleDeletePlant}
        handleEditPlant={handleEditPlant}
        onAddNotes={handleAddNotes}
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
        <GalleryShowcase>
          {Array.isArray(plant.gallery) &&
            plant.gallery.length > 0 &&
            plant.gallery.map((url, index) => (
              <GalleryImageContainer key={uid()}>
                <GalleryDeleteButton onClick={() => handleDelete(index)}>
                  🗑️
                </GalleryDeleteButton>
                <GalleryImage
                  src={url}
                  sizes="20vh"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={400}
                  height={400}
                  alt="Description"
                />
              </GalleryImageContainer>
            ))}
        </GalleryShowcase>
        {confirmDelete !== null && (
          <Modal
            handleConfirm={() => onClickDeleteImage(confirmDelete)}
            handleCancel={handleCancel}
            name="Image"
          />
        )}
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
  position: relative;
  width: 45%;
`;

const GalleryImage = styled(Image)`
  border-radius: 10px;
  box-shadow: var(--box-shadow-default);
`;

const GalleryDeleteButton = styled.button`
  background: rgba(255, 255, 255, 0.6);
  border: none;
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 5px;
  right: 10px;
  border-radius: 50%;
  font-size: 1.2rem;
  padding: 5px;
  cursor: pointer;
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;

const GalleryShowcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 70%;
  justify-content: space-around;
`;
