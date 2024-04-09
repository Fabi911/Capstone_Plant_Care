import styled from "styled-components";
import Image from "next/image";

const StyledLogo = styled(Image)`
  position: relative;
  top: -45px;
`;

export default function Logo() {
  return (
    <StyledLogo
      src="/img/StrangerPlants_black.png"
      width={160}
      height={140}
      alt="GreenThumpCare"
    />
  );
}
