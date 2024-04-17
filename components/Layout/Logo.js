import styled from "styled-components";
import Image from "next/image";

export default function Logo() {
  return (
    <StyledLogo
      src="/img/StrangerPlants_red.png"
      width={160}
      height={140}
      alt="GreenThumpCare"
    />
  );
}

const StyledLogo = styled(Image)`
  position: relative;
  z-index: 100;
`;
