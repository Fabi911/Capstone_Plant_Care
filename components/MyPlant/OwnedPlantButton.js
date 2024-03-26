import Heart from "./heart.svg";
import styled from "styled-components";

const likedHeart = <Heart height={30} width={30} fill="red" />;
const unlikeHeart = (
  <Heart height={30} width={30} fill="transparent" stroke="white" />
);

const StyledHeart = styled.button`
  background-color: transparent;
  border: none;
`;

export default function OwnedPlantButton({ favorite, onToggleFavorite }) {
  return (
    <>
      <StyledHeart onClick={onToggleFavorite}>
        {favorite ? likedHeart : unlikeHeart}
      </StyledHeart>
    </>
  );
}
