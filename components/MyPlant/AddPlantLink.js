import PlusButton from "@/public/img/plus2.png";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function AddPlantLink() {
  return (
    <StyledPlus href="/addPlant">
      <StyledDivPlus>
        <Image src={PlusButton} alt="add-button" height={50} width={50} />
      </StyledDivPlus>
    </StyledPlus>
  );
}

// styled components

const StyledPlus = styled(Link)`
  position: fixed;
  right: 5px;
  bottom: 45px;
  z-index: 10;

  @media (min-width: 600px) and (max-width: 900px) {
    right: var(--distance-edge-mobile);
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    right: var(--distance-edge-tablet);
  }

  @media (min-width: 1201px) {
    right: var(--distance-edge-desktop);
  }
`;

const StyledDivPlus = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35%;
  opacity: 0.8;

  &:active {
    box-shadow: inset 1px 1px 1px var(--box-shadow);
  }
`;
