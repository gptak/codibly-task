import useNumberInput from "./useNumberInput";
import { TextField } from "@mui/material";

const NumberInput = () => {
  const { filter, handleInput, handleFilter } = useNumberInput();

  return (
    <TextField
      type="number"
      inputProps={{ min: 1 }}
      value={filter}
      label="ID filter"
      sx={{ marginBottom: 2 }}
      onChange={handleInput}
      onKeyUp={handleFilter}
    />
  );
};

export default NumberInput;
