import Heart from "./heart.svg";
import styled from "styled-components";
import Favorite2 from "@/public/img/Favorite2.svg";

export default function OwnedPlantButton({ isOwned, handleToggleOwnedPlants }) {
  return (
    <>
      <StyledHeart onClick={handleToggleOwnedPlants}>
        {isOwned ? ownedHeart : notOwnedHeart}
      </StyledHeart>
    </>
  );
}

//styled components

const ownedHeart = (
  <Favorite2 height={60} width={60} fill="var(--main-color2)" />
);
const notOwnedHeart = (
  <Favorite2 height={60} width={60} fill="transparent" stroke="black" />
);

const StyledHeart = styled.button`
  background-color: transparent;
  border: none;
`;
