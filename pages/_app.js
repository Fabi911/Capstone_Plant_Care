import GlobalStyle from "../styles";
import { useState } from "react";
import { data } from "@/lib/db";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useState(data);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} plants={plants} />
    </>
  );
}
