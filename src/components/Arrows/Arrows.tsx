import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useArrows from "./useArrows";

export default function Arrows() {
  const { firstPage, lastPage, totalPage, error, handlePrev, handleNext } =
    useArrows();
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
      <IconButton
        disabled={firstPage || !totalPage || error}
        onClick={handlePrev}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        disabled={lastPage || !totalPage || error}
        onClick={handleNext}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Stack>
  );
}
