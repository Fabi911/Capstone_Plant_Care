import styled from "styled-components";
import Image from "next/image";

export default function Logo() {
  return (
    <ContainerLogo>
      <StyledLogo
        src="/img/StrangerPlants_green.png"
        sizes="22vh"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={400}
        height={400}
        alt="GreenThumpCare"
      />
    </ContainerLogo>
  );
}

const StyledLogo = styled(Image)`
  position: relative;
  z-index: 100;
  margin: 0;
`;

const ContainerLogo = styled.div`
  /* padding: 8px 4px 0px 4px;
  background: white;
  width: auto;
  border-radius: 7px;
  box-shadow: 4px 4px 4px lightgrey; */
`;
