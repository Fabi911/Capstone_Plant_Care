import PlantsList from "@/components/PlantsList";
import Link from "next/link";
import styled from "styled-components";


const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: white;
  padding: 2px;
`;

export default function HomePage({ plants, handleToggleOwnedPlants }) {
  return (
    <>
      <PlantsList
        plants={plants}
        handleToggleOwnedPlants={handleToggleOwnedPlants}
      ></PlantsList>

      <StyledLink href="/addPlant">Add Plant</StyledLink>
    </>

