import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import OwnedPlantButton from "./MyPlant/OwnedPlantButton";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import trash_icon from "@/public/img/trash.png";
import EditLink from "./MyPlant/EditLink";
import CreateNote from "./CreateNote";

export default function PlantDetail({
  plantDetail,
  handleToggleOwnedPlants,
  handleDeletePlant,
  mutate,
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  function handleDelete() {
    setConfirmDelete(true);
  }

  function handleCancel() {
    setConfirmDelete(false);
  }
  // let fertilizedSeasons;
  const fertiliserSeasons =
    plantDetail.fertiliser_season && plantDetail.fertiliser_season.length > 0
      ? plantDetail.fertiliser_season.join(", ")
      : "";

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
        {/* fertiliser season:{" "}
        {(fertilizedSeasons = plantDetail.fertiliser_season.join(", "))} */}
        Fertiliser Season: {fertiliserSeasons}
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
      <CreateNote />
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
