import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  width: 80vw;
  height: auto;
`;

export default function PlantsPreview({ name, botanical_name, image, id }) {
  return (
    <StyledLink href={`/plants/${id}`}>
      <p>{name}</p>
      <p>{botanical_name}</p>
      <Image src={image} alt={name} width={50} height={50} />
      <hr />
    </StyledLink>
  );
}
