import EditPencil from "@/public/img/edit.png";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function EditLink({ plantDetail }) {
  return (
    <StyledEdit href={`/plants/${plantDetail.id}/edit`}>
      <StyledImage
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

const StyledImage = styled(Image)`
  /*  @media (min-width: 600px) {
    height: var(--icon-height-mobile);
    width: var(--icon-width-mobile);
  }
 */
  @media (min-width: 600px) {
    height: var(--icon-height-tablet);
    width: var(--icon-width-tablet);
  }

  @media (min-width: 900px) {
    height: var(--icon-height-desktop);
    width: var(--icon-width-desktop);
  }
`;
