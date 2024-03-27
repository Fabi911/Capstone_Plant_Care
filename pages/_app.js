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
    setPlants([{ ...data, id: uid(), isOwned: true }, ...plants]);
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
