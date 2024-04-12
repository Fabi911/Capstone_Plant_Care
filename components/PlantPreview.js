import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import OwnedPlantButton from "./MyPlant/OwnedPlantButton";

export default function PlantPreview({
  name,
  botanicalName,
  image,
  id,
  isOwned,
  handleToggleOwnedPlants,
}) {
  return (
    <>
      <StyledCard>
        <StyledLink href={`/plants/${id}`}>
          <StyledImage src={image} alt={name} width={100} height={100} />
          <StyledTextBox>
            <p>{name}</p>
            <p>botanical name: {botanicalName}</p>
          </StyledTextBox>
        </StyledLink>
        <OwnedPlantButton
          isOwned={isOwned}
          handleToggleOwnedPlants={handleToggleOwnedPlants}
          height={60}
          width={60}
        />
      </StyledCard>
    </>
  );
}

// styled components

const StyledCard = styled.div`
  width: 80vw;
  height: auto;
  /* border: 1px solid black; */
  box-shadow: var(--box-shadow-default);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--main-color3);
  border-radius: 20px;
  min-width: 300px;
  max-width: 960px;
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
  @media (min-width: 901px) and (max-width: 1200px) {
    width: var(--card-tablet);
  }

  @media (min-width: 1201px) {
    width: var(--card-browser);
  }
`;

const StyledImage = styled(Image)`
  border-radius: 5px;
  width: 25%;
  height: auto;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #001e1d;
`;

const StyledTextBox = styled.div`
  width: 70%;
`;
