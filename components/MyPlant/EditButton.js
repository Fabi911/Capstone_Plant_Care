import EditPencil from "@/public/img/edit.png";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledEdit = styled(Link)`
  background: transparent;
`;

export default function EditButton({ plantDetail }) {
  return (
    <>
      <StyledEdit href={`/plants/${plantDetail.id}/edit`}>
        <Image src="/img/edit.png" alt="edit" height={50} width={50} />
      </StyledEdit>
    </>
  );
}