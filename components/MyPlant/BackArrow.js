import back_arrow from "@/public/img/arrow4.png";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledArrow = styled(Link)`
  position: fixed;
  left: 15px;
  top: 15px;
  background: transparent;
`;

export default function BackArrow({ link }) {
  return (
    <>
      <StyledArrow href={link}>
        <Image src={back_arrow} alt="arrow" height={30} width={35} />
      </StyledArrow>
    </>
  );
}
