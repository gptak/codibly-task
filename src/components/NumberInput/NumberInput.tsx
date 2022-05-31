import useNumberInput from "./useNumberInput";
import { TextField, Button, Stack } from "@mui/material";

const NumberInput = () => {
  const { filter,submitDisable, handleInput, handleFilter, handleReset } = useNumberInput();

  return (
    <Stack direction="row" alignItems="center">
      <TextField
        type="number"
        inputProps={{ min: 1 }}
        value={filter}
        label="ID filter"
        onChange={handleInput}
        sx={{
          width: {
            xs: 100,
            sm: "auto",
          },
        }}
      />
      <Button
        onClick={handleFilter}
        disabled={submitDisable}
        variant="contained"
        size="small"
        sx={{ marginLeft: 1 }}
      >
        Submit
      </Button>
      <Button
        onClick={handleReset}
        variant="outlined"
        size="small"
        sx={{ marginLeft: 1 }}
      >
        Reset
      </Button>
    </Stack>
  );
};

export default NumberInput;
