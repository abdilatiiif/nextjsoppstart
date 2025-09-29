import "./App.css";

import finnTilfeldigOrd from "./components/ord";

function App() {
  return (
    <main>
      <article> Hvilken ord ser du her? </article>
      {finnTilfeldigOrd("adjektiver")} - {finnTilfeldigOrd("substantiver")}
    </main>
  );
}

export default App;
