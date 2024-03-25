import Image from "next/image";

export default function PlantsPreview({ name, botanical_name, image }) {
  return (
    <>
      <p>{name}</p>
      <p>{botanical_name}</p>
      <Image src={image} alt={name} width={50} height={50} />
      <hr></hr>
    </>
  );
}
