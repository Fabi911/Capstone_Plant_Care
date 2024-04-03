import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import OwnedPlantButton from "./MyPlant/OwnedPlantButton";
import { useState } from "react";

import ConfirmDelete from "./ConfirmDelete";

const StyledImage = styled(Image)`
  border: 1px solid black;
  border-radius: 20px;
`;

const StyledLI = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: white;
  padding: 2px;
`;

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
    <section>
      <h2>{plantDetail.name}</h2>
      <StyledImage
        alt={plantDetail.name}
        src={plantDetail.image}
        width={200}
        height={200}
      />
      <ul>
        <StyledLI>botanical name : {plantDetail.botanical_name}</StyledLI>
        <StyledLI>water need : {plantDetail.water_need}</StyledLI>
        <StyledLI>fertiliser season: {plantDetail.fertiliser_season}</StyledLI>
        <OwnedPlantButton
          isOwned={plantDetail.isOwned}
          handleToggleOwnedPlants={() =>
            handleToggleOwnedPlants(plantDetail.id)
          }
        />
      </ul>
      <StyledLink href={`/plants/${plantDetail.id}/edit`}>edit</StyledLink>
      <button onClick={handleDelete}>Delete this plant</button>
      {confirmDelete && (
        <ConfirmDelete
          handleConfirm={() => handleDeletePlant(plantDetail.id)}
          handleCancel={handleCancel}
        />
      )}
    </section>
  );
}
