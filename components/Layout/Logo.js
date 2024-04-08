import styled from "styled-components";
import AppLogo from "@/img/StrangerPlants.png";
import Image from "next/image";

const StyledLogo = styled(Image)`
  position: relative;
  top: -45px;
`;

export default function Logo() {
  return (
    <StyledLogo src={AppLogo} width={160} height={140} alt="GreenThumpCare" />
  );
}
