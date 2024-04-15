import Image from "next/image";
import styled from "styled-components";
import OwnedPlantButton from "./MyPlant/OwnedPlantButton";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import trash_icon from "@/public/img/trash.png";
import EditLink from "./MyPlant/EditLink";
import FormComments from "./FormComments";
import ShowComments from "./ShowComments";

export default function PlantDetail({
  plantDetail,
  handleToggleOwnedPlants,
  handleDeletePlant,
  mutate,
  handleAddNotes,
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  function handleDelete() {
    setConfirmDelete(true);
  }

  function handleCancel() {
    setConfirmDelete(false);
  }
  let fertilizedSeasons;
  return (
    <StyledBox>
      <h2>{plantDetail.name}</h2>
      <StyledImage
        alt={plantDetail.name}
        src={plantDetail.image}
        sizes="40vh"
        style={{
          width: "50%",
          height: "auto",
        }}
        width={400}
        height={400}
      />
      <h3>Plant Details</h3>
      <DetailTextBox>
        botanical name : {plantDetail.botanical_name}
        <br />
        water need : {plantDetail.water_need}
        <br />
        fertiliser season:{" "}
        {(fertilizedSeasons = plantDetail.fertiliser_season.join(", "))}
      </DetailTextBox>
      <OwnedPlantButton
        height={90}
        width={90}
        isOwned={plantDetail.isOwned}
        handleToggleOwnedPlants={() =>
          handleToggleOwnedPlants(plantDetail, mutate)
        }
      />

      <IconBox>
        <EditLink plantDetail={plantDetail} />
        <TrashButton onClick={handleDelete}>
          <Image src={trash_icon} alt="arrow" height={25} width={25} />
        </TrashButton>
      </IconBox>
      {confirmDelete && (
        <ConfirmDelete
          handleConfirm={() => handleDeletePlant(plantDetail._id)}
          handleCancel={handleCancel}
        />
      )}
      <NotesContainer>
        <FormComments
          onSubmit={handleAddNotes}
          plant={plantDetail}
          mutate={mutate}
        />

        <ShowComments plant={plantDetail} />
      </NotesContainer>
    </StyledBox>
  );
}

// Styled Components
const StyledImage = styled(Image)`
  border-radius: 20px;
  box-shadow: var(--box-shadow-default);
  margin-bottom: 20px;
`;

const DetailTextBox = styled.p`
  text-align: left;
`;

const TrashButton = styled.button`
  background: transparent;
  border: none;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--main-color3);
  box-shadow: var(--box-shadow-default);
  border-radius: 15px;
  width: 80vw;
`;

const IconBox = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
  width: 70vw;
  flex-direction: row-reverse;
`;

const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  width: 80%;
  box-shadow: var(--box-shadow-default);
  background-color: var(--main-color1);
  margin-bottom: 15px;
  padding: 10px 0;
`;
