import Heart from "./heart.svg";
import styled from "styled-components";

const ownedHeart = <Heart height={30} width={30} fill="red" />;
const notOwnedHeart = (
  <Heart height={30} width={30} fill="transparent" stroke="white" />
);

const StyledHeart = styled.button`
  background-color: transparent;
  border: none;
`;

export default function OwnedPlantButton({ isOwned, handleToggleOwnedPlants }) {
  return (
    <>
      <StyledHeart onClick={handleToggleOwnedPlants}>
        {isOwned ? ownedHeart : notOwnedHeart}
      </StyledHeart>
    </>
  );
}
