import NumberInput from "../components/NumberInput/NumberInput";
import ColorsTable from "../components/ColorsTable/ColorosTable";
import Arrows from "../components/Arrows/Arrows";
import Error from "../components/Error/Error";
import useApp from "./useApp";

function App() {
  const { error } = useApp();

  return (
    <div className="App">
      <NumberInput />
      {error ? <Error /> : <ColorsTable />}
      <Arrows />
    </div>
  );
}

export default App;
