import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import OwnedPlantButton from "./MyPlant/OwnedPlantButton";
import BackArrow from "./MyPlant/BackArrow";

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
  background-color: #abd1c6;
  border-radius: 20px;
  &:active {
    box-shadow: inset 0px 0px 5px var(--box-shadow);
  }
`;

const StyledImage = styled(Image)`
  margin-right: 20px;
  border-radius: 5px;
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
            <div>
              <p>{name}</p>
              <p>botanical name: {botanicalName}</p>
            </div>
          </StyledDiv>
        </StyledLink>
        <StyledDiv2>
          <OwnedPlantButton
            isOwned={isOwned}
            handleToggleOwnedPlants={handleToggleOwnedPlants}
          />
        </StyledDiv2>
      </StyledCard>
    </>
  );
}
