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
          <StyledDiv>
            <StyledImage src={image} alt={name} width={100} height={100} />
            <StyledTextBox>
              <p>{name}</p>
              <p>botanical name: {botanicalName}</p>
            </StyledTextBox>
          </StyledDiv>
        </StyledLink>
        <StyledDiv2>
          <OwnedPlantButton
            isOwned={isOwned}
            handleToggleOwnedPlants={handleToggleOwnedPlants}
            height={60}
            width={60}
          />
        </StyledDiv2>
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
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;

const StyledImage = styled(Image)`
  margin-right: 20px;
  border-radius: 5px;
  width: 15vw;
  height: auto;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: not-allowed;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #001e1d;
  flex-grow: 2;
`;

const StyledTextBox = styled.div`
  width: 38vw;
`;
