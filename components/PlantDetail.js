import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import OwnedPlantButton from "./MyPlant/OwnedPlantButton";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import trash_icon from "@/public/img/trash.png";
import EditButton from "./MyPlant/EditButton";

export default function PlantDetail({
  plantDetail,
  isOwned,
  handleToggleOwnedPlants,
  handleDeletePlant,
  handleEditPlant,
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  function handleDelete() {
    setConfirmDelete(true);
  }

  function handleCancel() {
    setConfirmDelete(false);
  }

  return (
    <StyledBox>
      <h2>{plantDetail.name}</h2>
      <StyledImage
        alt={plantDetail.name}
        src={plantDetail.image}
        width={200}
        height={200}
      />
      <DetailTextBox>
        botanical name : {plantDetail.botanical_name}
        <br />
        water need : {plantDetail.water_need}
        <br />
        fertiliser season: {plantDetail.fertiliser_season}
      </DetailTextBox>
      <OwnedPlantButton
        isOwned={plantDetail.isOwned}
        handleToggleOwnedPlants={() => handleToggleOwnedPlants(plantDetail.id)}
      />

      <IconBox>
        <EditButton plantDetail={plantDetail} />
        <TrashButton onClick={handleDelete}>
          <Image src={trash_icon} alt="arrow" height={35} width={35} />
        </TrashButton>
      </IconBox>
      {confirmDelete && (
        <ConfirmDelete
          handleConfirm={() => handleDeletePlant(plantDetail.id)}
          handleCancel={handleCancel}
        />
      )}
    </StyledBox>
  );
}

// Styled Components
const StyledImage = styled(Image)`
  border: 1px solid black;
  border-radius: 20px;
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
`;

const IconBox = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
`;
