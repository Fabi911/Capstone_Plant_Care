import PlantPreview from "@/components/PlantPreview";
import PlantsList from "@/components/PlantsList";
import { PlantListItem } from "@/components/PlantsList";
import BackArrow from "@/components/MyPlant/BackArrow";

export default function OwnedPage({ plants, handleToggleOwnedPlants }) {
  /* const isMyPlant = plants.filter((plant) => plant.isOwned === true); */
  return (
    <>
      <BackArrow />
      <ul>
        {plants.map((plant) => {
          if (plant.isOwned) {
            return (
              <PlantListItem key={plant.id}>
                <PlantPreview
                  name={plant.name}
                  botanicalName={plant.botanical_name}
                  image={plant.image}
                  id={plant.id}
                  isOwned={plant.isOwned}
                  handleToggleOwnedPlants={() =>
                    handleToggleOwnedPlants(plant.id)
                  }
                />
              </PlantListItem>
            );
          }
        })}
      </ul>
    </>
  );
}
