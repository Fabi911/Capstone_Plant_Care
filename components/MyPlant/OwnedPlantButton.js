import styled from "styled-components";
import Favorite2 from "@/public/img/Favorite2.svg";

export default function OwnedPlantButton({
  isOwned,
  onToggleOwnedPlants,
  height,
  width,
}) {
  const ownedHeart = (
    <Favorite2 height={height} width={width} fill="var(--main-color2)" />
  );
  const notOwnedHeart = (
    <Favorite2
      height={height}
      width={width}
      fill="transparent"
      stroke="black"
    />
  );
  return (
    <>
      <StyledHeart onClick={onToggleOwnedPlants}>
        {isOwned ? ownedHeart : notOwnedHeart}
      </StyledHeart>
    </>
  );
}

//styled components

const StyledHeart = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
