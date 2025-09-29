import "./App.css";

function App() {
  type Menneske = {
    navn: string;
    alder: number;
    addresse: string;
    barn: {
      antall: number[];
    };
  };

  const erik: Menneske = {
    navn: "erik",
    alder: 44,
    addresse: "halserund 33",
    barn: {
      antall: [4],
    },
  };

  console.log(erik);

  return (
    <>
      <main>
        jeg heter {erik.navn} og jeg bor på {erik.addresse}
      </main>
    </>
  );
}

export default App;
