import "./App.css";

function App() {
  function getFullName(firstName: string, lastName: string, alder?: number) {
    return `mitt navn er ${firstName} ${lastName} ${!alder ? "" : alder}`;
  }

  return (
    <>
      <main>{getFullName("Latif", "Hassan")}</main>
    </>
  );
}

export default App;
