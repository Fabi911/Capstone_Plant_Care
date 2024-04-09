import PlantsList from "@/components/PlantsList";
import Link from "next/link";
import styled from "styled-components";
import BackArrow from "@/components/MyPlant/BackArrow";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: white;
  padding: 2px;
`;

export default function Overview({ plants, handleToggleOwnedPlants }) {
  return (
    <>
      <BackArrow />
      <PlantsList
        plants={plants}
        handleToggleOwnedPlants={handleToggleOwnedPlants}
      ></PlantsList>

      <StyledLink href="/addPlant">Add Plant</StyledLink>
    </>
  );
}
