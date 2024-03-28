import GlobalStyle from "../styles";
import { useState } from "react";
import { data } from "@/lib/db";
import useLocalStorageState from "use-local-storage-state";
import Navbar from "@/components/Navbar";

import { uid } from "uid";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useLocalStorageState("Plants", {
    defaultValue: data,
  });

  const router = useRouter();

  function handleAddPlant(data) {
    setPlants([
      {
        ...data,
        id: uid(),
        isOwned: true,
        image:
          "https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZsb3dlciUyMHVnbHl8ZW58MHx8MHx8fDA%3D",
      },
      ...plants,
    ]);
    router.push("/ownedPage");
  }

  function handleToggleOwnedPlants(id) {
    setPlants(
      plants.map((plant) =>
        id === plant.id ? { ...plant, isOwned: !plant.isOwned } : plant
      )
    );
  }
  console.log("plants: ", plants);
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        plants={plants}
        handleToggleOwnedPlants={handleToggleOwnedPlants}
        handleAddPlant={handleAddPlant}
      />
      <Navbar />
    </>
  );
}
