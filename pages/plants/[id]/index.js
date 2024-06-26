import { useRouter } from "next/router";
import useSWR from "swr";
import PlantDetail from "@/components/PlantDetail";
import { uid } from "uid";
import Image from "next/image";
import BackArrow from "@/components/MyPlant/BackArrow";
import styled from "styled-components";
import Notes from "@/components/Notes/Notes";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";
import Modal from "@/components/Modal";
import uploadImg from "/public/img/uploadImg.png";

export default function DetailPage({
  handleToggleOwnedPlants,
  handleDeletePlant,
  handleEditPlant,
  handleAddNotes,
  handleDeleteImage,
  handleAddGalleryImage,
  handleDeleteNote,
}) {
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: session, status } = useSession();
  const {
    data: plant,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/plants/${id}`, { refreshInterval: 400 });
  if (!session) {
    return (
      <>
        <BackArrow link="/overview" />
        <p>You are not authorized to visit this page.</p>
      </>
    );
  }
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
    setSelectedName(null);
  }

  if (!plant) return null;
  if (status !== "authenticated") {
    return <h1>Please Login</h1>;
  }
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedName(file ? file.name : "");
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
        handleDeleteNote={handleDeleteNote}
      />

      <GalleryContainer>
        <h2>Gallery</h2>
        <form onSubmit={handleSubmit}>
          <UploadBox>
            <LabelImg htmlFor="image">
              choose image
              <ImageUpload
                src={uploadImg}
                alt="upload"
                width={30}
                height={30}
              />
            </LabelImg>
            <h3>{selectedName || "Click to upload"}</h3>
            <ImageInput
              type="file"
              id="image"
              name="image"
              accept="image/*"
              required
              onChange={handleFileChange}
            />

            <ButtonUpload type="submit">Upload</ButtonUpload>
          </UploadBox>
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
            onConfirm={() => onClickDeleteImage(confirmDelete)}
            onCancel={handleCancel}
            name="Image"
          />
        )}
      </GalleryContainer>
      <NotesContainer>
        <Notes
          handleDeleteNote={handleDeleteNote}
          plant={plant}
          onAddNotes={handleAddNotes}
          mutate={mutate}
        />
      </NotesContainer>
    </>
  );
}

// styled components

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  background: var(--main-color3);
  box-shadow: var(--card-shadow-default);
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

const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  border-radius: 15px;
  padding-bottom: 15px;
  gap: 10px;
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

const ButtonUpload = styled.button`
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: var(--box-shadow-default);
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;

const UploadBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 30px;
`;

const LabelImg = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const ImageUpload = styled(Image)`
  cursor: pointer;
  margin-top: 10px;
`;

const ImageInput = styled.input`
  display: none;
`;
