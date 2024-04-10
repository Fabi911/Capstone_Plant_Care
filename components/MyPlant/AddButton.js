import PlusButton from "@/public/img/plus2.png";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function AddPlantLink() {
  return (
    <>
      <StyledPlus href="/addPlant">
        <StyledDivPlus>
          <Image src={PlusButton} alt="arrow" height={50} width={50} />
        </StyledDivPlus>
      </StyledPlus>
    </>
  );
}

// styled components

const StyledPlus = styled(Link)`
  position: fixed;
  right: 5px;
  bottom: 45px;
  z-index: 10;
`;

const StyledDivPlus = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  opacity: 0.8;
  background-color: var(--main-color2);
  box-shadow: 1px 1px 1px var(--box-shadow);
  &:active {
    box-shadow: inset 1px 1px 1px var(--box-shadow);
  }
`;
