import useNumberInput from "./useNumberInput";
import { TextField, Button } from "@mui/material";

const NumberInput = () => {
  const { filter, handleInput, handleFilter, handleReset } = useNumberInput();

  return (
    <>
      <TextField
        type="number"
        inputProps={{ min: 1 }}
        value={filter}
        label="ID filter"
        sx={{ marginBottom: 2 }}
        onChange={handleInput}
      />
      <Button onClick={handleFilter}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </>
  );
};

export default NumberInput;
