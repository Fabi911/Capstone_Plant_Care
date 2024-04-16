import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

import { mutate, SWRConfig } from "swr";



import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



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
    const response = await toast.promise(
      fetch("/api/plants", {
        method: "POST",
        body: JSON.stringify(plant),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "adding is pending",
        success: "Plant added! 👌",
        error: "adding rejected 🤯",
      }
    );

    if (response.ok) {
      await response.json();
      router.push("/ownedPage");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  async function handleDeletePlant(id) {

    const response = await toast.promise(
      fetch(`/api/plants/${id}`, {
        method: "DELETE",
      }),
      {
        pending: "deleting is pending",
        success: "Plant deleted! 👌",
        error: "deleting rejected 🤯",
      }
    );


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


    const response = await toast.promise(
      fetch(`/api/plants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
      }),
      {
        pending: "Editing is pending",
        success: "Plant edited! 👌",
        error: "Editing rejected 🤯",
      }
    );
    if (response.ok) {
      mutate();
      router.push(`/plants/${id}`);
    } else {
      console.error(respone.error);
    }
  }

  async function handleAddGalleryImage(plant, id, mutate) {
    console.log("Plant edited");

    const response = await toast.promise(
      fetch(`/api/plants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
      }),
      {
        pending: "Upload is pending",
        success: "Image added to Gallery! 👌",
        error: "Upload rejected 🤯",
      }
    );
    if (response.ok) {
      mutate();
      router.push(`/plants/${id}`);
    } else {
      console.error(respone.error);
    }
  }

  async function handleAddNotes(plant, id, mutate) {
    const response = await toast.promise(
      fetch(`/api/plants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
      }),
      {
        pending: "adding is pending",
        success: "Note added! 👌",
        error: "adding rejected 🤯",
      }
    );

    if (respone.ok) {
      mutate();
      router.push(`/plants/${id}`);
       } else {
      console.error(respone.error);
    }
  }

  async function handleDeleteImage(plant, id, mutate) {
    const response = await toast.promise(
      fetch(`/api/plants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
      }),
      {
        pending: "deleting is pending",
        success: "Image deleted! 👌",
        error: "deleting rejected 🤯",
      }
    );

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
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Component
            {...pageProps}
            handleToggleOwnedPlants={handleToggleOwnedPlants}
            handleAddPlant={handleAddPlant}
            handleDeletePlant={handleDeletePlant}
            handleEditPlant={handleEditPlant}
            landingData={landingData}
            handleAddNotes={handleAddNotes}
            handleDeleteImage={handleDeleteImage}
            handleAddGalleryImage={handleAddGalleryImage}

          />
        </Layout>
      </SWRConfig>
    </main>
  );
}
