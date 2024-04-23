import EditPencil from "@/public/img/edit.png";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function EditLink({ plantDetail }) {
  return (
    <StyledEdit href={`/plants/${plantDetail._id}/edit`}>
      <Image src={EditPencil} alt="edit-plant-button" height={45} width={45} />
    </StyledEdit>
  );
}

const StyledEdit = styled(Link)`
  background: transparent;
`;
