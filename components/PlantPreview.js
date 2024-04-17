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
  mutate,
}) {
  return (
    <PlantPreviewContainer>
      <StyledLink href={`/plants/${id}`}>
        <StyledCard>
          <StyledImage src={image} alt={name} width={100} height={100} />
          <StyledTextBox>
            <Text>
              <Span> {name}</Span>
              botanical name: {botanicalName}
            </Text>
          </StyledTextBox>
        </StyledCard>
      </StyledLink>
      <OwnedPlantButtonStyled>
        <OwnedPlantButton
          isOwned={isOwned}
          handleToggleOwnedPlants={handleToggleOwnedPlants}
          height={60}
          width={60}
        />
      </OwnedPlantButtonStyled>
    </PlantPreviewContainer>
  );
}

// styled components

const PlantPreviewContainer = styled.div`
  position: relative;
`;

const StyledCard = styled.div`
  width: 80vw;
  height: auto;
  box-shadow: var(--box-shadow-default);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--main-color3);
  border-radius: 15px;
  min-width: 300px;
  max-width: 960px;
  cursor: pointer;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OwnedPlantButtonStyled = styled.div`
  position: absolute;
  top: -26px;
  right: -5px;
`;

const Text = styled.p`
  text-align: left;
  width: 60%;
  word-wrap: normal;
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;
