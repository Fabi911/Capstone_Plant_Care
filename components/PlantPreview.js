import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import OwnedPlantButton from "./MyPlant/OwnedPlantButton";

const StyledCard = styled.div`
  width: 80vw;
  height: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 80%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #abd1c6;
  border-radius: 20px;
  &:hover {
    box-shadow: 5px 5px 5px #f9bc60;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: right;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #001e1d;
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
            <Image src={image} alt={name} width={100} height={100} />
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
