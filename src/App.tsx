import React from "react";
import "./App.css";
import NumberInput from "./components/NumberInput/NumberInput";
import ColorsTable from "./components/ColorsTable/ColorosTable";
import Arrows from "./components/Arrows/Arrows";

function App() {
  return (
    <div className="App">
      <NumberInput />
      <ColorsTable />
      <Arrows />
    </div>
  );
}

export default App;
