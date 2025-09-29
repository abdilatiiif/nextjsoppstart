import { useState } from "react";
import "./App.css";

import Zoo from "./data.tsx";

function App() {
  const [dyrList, setDyrList] = useState<Dyr[]>(() => [...Zoo.dyrene]);

  /*
  type Ansatt = {
    navn: string;
    alder: number;
    ansattÅr: number;
  };
*/

  type Dyr = {
    navn: string;
    høydeMeter: number;
    favoritt: {
      mat: string;
      aktivitet: string;
    };
  };

  const rev: Dyr = {
    navn: "misterlure-lur",
    høydeMeter: 1.25,
    favoritt: {
      mat: "hamster",
      aktivitet: "jakte",
    },
  };

  function leggTilDyr() {
    setDyrList((prevList) => [...prevList, rev]);
  }

  return (
    <>
      <main>
        {" "}
        han heter {rev.navn} og liker å spise {rev.favoritt.mat}
        Det er totalt {Zoo.dyrene.length} i dyrehagen;
        <button onClick={leggTilDyr}> legg til rev</button>
        Det er nå totalt {dyrList.length} i dyrehagen. De heter{" "}
        {dyrList.map((dyr) => (
          <p key={dyr.navn}>{dyr.navn}</p>
        ))}
      </main>
    </>
  );
}

export default App;
