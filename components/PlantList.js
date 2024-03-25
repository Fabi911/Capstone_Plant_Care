import PlantsPreview from "./PlantsPreview";
import Image from "next/image.js";

export default function PlantList({ plants }) {
  return (
    <>
      {plants.map((plant) => (
        <p key={plant.id}>
          <PlantsPreview
            name={plant.name}
            botanical_name={plant.botanical_name}
            image={plant.image}
          />
        </p>
      ))}
    </>
  );
}
