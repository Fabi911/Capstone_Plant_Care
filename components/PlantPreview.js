import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import OwnedPlantButton from "./MyPlant/OwnedPlantButton";

const StyledCard = styled.div`
  width: 80vw;
  height: auto;
  /* border: 1px solid black; */
  box-shadow: 2px 2px 2px var(--box-shadow);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--main-color3);
  border-radius: 20px;
  &:active {
    box-shadow: inset 2px 2px 2px var(--box-shadow);
  }
`;

const StyledImage = styled(Image)`
  margin-right: 20px;
  border-radius: 5px;
  width: 15vw;
`;

const StyledUpper = styled.div`
  display: flex;
  /* flex-direction: row; */
`;

const StyledLowest = styled.div`
  display: flex;
  cursor: not-allowed;
`;

const StyledMiddle = styled.div`
  width: 38vw;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #001e1d;
  flex-grow: 2;
`;

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
          <StyledUpper>
            <StyledImage src={image} alt={name} width={100} height={100} />
            <StyledMiddle>
              <p>{name}</p>
              <p>botanical name: {botanicalName}</p>
            </StyledMiddle>
          </StyledUpper>
        </StyledLink>
        <StyledLowest>
          <OwnedPlantButton
            isOwned={isOwned}
            handleToggleOwnedPlants={handleToggleOwnedPlants}
          />
        </StyledLowest>
      </StyledCard>
    </>
  );
}
