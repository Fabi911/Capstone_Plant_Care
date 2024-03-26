import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledImage = styled(Image)`
  border: 1px solid black;
  border-radius: 20px;
`;

export default function PlantDetail({ plantDetail }) {
  return (
    <section>
      <h2>{plantDetail.name}</h2>
      <StyledImage
        alt={plantDetail.name}
        src={plantDetail.image}
        width={200}
        height={200}
      />
      <p>botanical name : {plantDetail.botanical_name}</p>
      <p>water need : {plantDetail.water_need}</p>
      <p>fertiliser season: {plantDetail.fertiliser_season}</p>
      <Link href="/">
        <button>Back</button>
      </Link>
    </section>
  );
}
