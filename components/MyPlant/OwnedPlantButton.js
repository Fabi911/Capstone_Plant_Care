import Heart from "./heart.svg";
import styled from "styled-components";
import Favorite2 from "@/img/Favorite2.svg";

const ownedHeart = <Favorite2 height={50} width={50} fill="#b7e4a7" />;
const notOwnedHeart = (
  <Favorite2 height={50} width={50} fill="transparent" stroke="black" />
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
