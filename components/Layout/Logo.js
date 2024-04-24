import styled from "styled-components";
import Image from "next/image";

export default function Logo() {
  return (
    <>
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
    </>
  );
}

const StyledLogo = styled(Image)`
  position: relative;
  z-index: 100;
  margin: 0;
`;
