import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

import { mutate, SWRConfig } from "swr";

import { useState } from "react";
import { Poiret_One } from "next/font/google";

const poiret = Poiret_One({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
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

  async function handleAddPlant(plant) {
    const response = await fetch("/api/plants", {
      method: "POST",
      body: JSON.stringify(plant),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      router.push("/ownedPage");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  async function handleDeletePlant(id) {
    const response = await fetch(`/api/plants/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/overview");
    } else {
      console.error(response.status);
    }
  }

  async function handleToggleOwnedPlants(plant, mutate) {
    try {
      const updatedPlant = { ...plant, isOwned: !plant.isOwned };

      const response = await fetch(`/api/plants/${plant._id}`, {
        method: "PUT",
        body: JSON.stringify(updatedPlant),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        mutate();
      } else {
        console.error(`error: ${response.status}`);
      }
    } catch (error) {
      console.error("error at switching", error);
    }
  }

  async function handleEditPlant(plant, id, mutate) {
    const respone = await fetch(`/api/plants/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    });

    if (respone.ok) {
      mutate();
      router.push(`/plants/${id}`);
    } else {
      console.error(respone.error);
    }
  }

  async function handleDeleteImage(plant, id, mutate) {
    const respone = await fetch(`/api/plants/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    });

    if (respone.ok) {
      router.push(`/plants/${id}`);
      mutate();
    } else {
      console.error(respone.error);
    }
  }

  return (
    <main className={poiret.className}>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <Layout>
          <Component
            {...pageProps}
            handleToggleOwnedPlants={handleToggleOwnedPlants}
            handleAddPlant={handleAddPlant}
            handleDeletePlant={handleDeletePlant}
            handleEditPlant={handleEditPlant}
            landingData={landingData}
            handleDeleteImage={handleDeleteImage}
          />
        </Layout>
      </SWRConfig>
    </main>
  );
}
