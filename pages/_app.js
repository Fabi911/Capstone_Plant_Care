import GlobalStyle from "../styles";
import { data } from "@/lib/db";
import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/Layout";
import { uid } from "uid";
import { useRouter } from "next/router";
import { useState } from "react";
import { Poiret_One } from "next/font/google";

const poiret = Poiret_One({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useLocalStorageState("Plants", {
    defaultValue: data,
  });

  const [landingData, setLandingData] = useState([
    {
      id: 0,
      name: "Plantlist",
      link: "/overview",
      icon: "/img/iconOverview.png",
    },
    {
      id: 1,
      name: "My Plants",
      link: "/ownedPage",
      icon: "/img/iconOwned.png",
    },
    {
      id: 2,
      name: "Watering Plan",
      link: "/watering",
      icon: "/img/iconWater.png",
    },
    {
      id: 3,
      name: "Fertilizing Plan",
      link: "/fertilizing",
      icon: "/img/iconFertilizing.png",
    },
  ]);

  const router = useRouter();

  function handleAddPlant(data) {
    setPlants([
      {
        ...data,
        id: uid(),
        isOwned: true,
        gallery: [],
      },
      ...plants,
    ]);
    router.push("/ownedPage");
  }

  function handleDeletePlant(id) {
    setPlants(plants.filter((plant) => plant.id !== id));
    router.push("/overview");
  }

  function handleToggleOwnedPlants(id) {
    setPlants(
      plants.map((plant) =>
        id === plant.id ? { ...plant, isOwned: !plant.isOwned } : plant
      )
    );
  }

  function handleGalleryPlant(detailPlant) {
    setPlants(
      plants.map((plant) => (plant.id === detailPlant.id ? detailPlant : plant))
    );
  }

  function handleEditPlant(editPlant) {
    setPlants(
      plants.map((plant) => (plant.id === editPlant.id ? editPlant : plant))
    );
    router.push(`/plants/${editPlant.id}`);
  }

  return (
    <main className={poiret.className}>
      <GlobalStyle />

      <Layout>
        <Component
          {...pageProps}
          plants={plants}
          handleToggleOwnedPlants={handleToggleOwnedPlants}
          handleAddPlant={handleAddPlant}
          handleDeletePlant={handleDeletePlant}
          handleGalleryPlant={handleGalleryPlant}
          handleEditPlant={handleEditPlant}
          landingData={landingData}
        />
      </Layout>
    </main>
  );
}
