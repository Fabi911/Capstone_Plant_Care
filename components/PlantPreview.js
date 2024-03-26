import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const StyledCard = styled.div`
  width: 80vw;
  height: auto;
  border: 1px solid black;
  background-color: #abd1c6;
  border-radius: 20px;
  &:hover {
    box-shadow: 5px 5px 5px #f9bc60;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #001e1d;
`;

export default function PlantPreview({ name, botanicalName, image, id }) {
  return (
    <StyledLink href={`/plants/${id}`}>
      <StyledCard>
        <p>{name}</p>
        <p>botanical name: {botanicalName}</p>
        <Image src={image} alt={name} width={100} height={100} />
      </StyledCard>
    </StyledLink>
  );
}
