import useNumberInput from "./useNumberInput";
import { TextField, Button, Stack } from "@mui/material";

const NumberInput = () => {
  const {
    filter,
    submitDisable,
    resetDisable,
    handleInput,
    handleFilter,
    handleReset,
  } = useNumberInput();

  return (
    <form onSubmit={handleFilter}>
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
          type="submit"
          disabled={submitDisable}
          variant="contained"
          size="small"
          sx={{ marginLeft: 1 }}
        >
          Submit
        </Button>
        <Button
          onClick={handleReset}
          disabled={resetDisable}
          variant="outlined"
          size="small"
          sx={{ marginLeft: 1 }}
        >
          Reset
        </Button>
      </Stack>
    </form>
  );
};

export default NumberInput;
