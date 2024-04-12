import EditPencil from "@/public/img/edit.png";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function EditLink({ plantDetail }) {
  return (
    <StyledEdit href={`/plants/${plantDetail.id}/edit`}>
      <Image
        src="/img/edit.png"
        alt="edit-plant-button"
        height={25}
        width={25}
      />
    </StyledEdit>
  );
}

const StyledEdit = styled(Link)`
  background: transparent;
`;