import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useArrows from "./useArrows";

export default function Arrows() {
  const { firstPage, lastPage, handlePrev, handleNext } = useArrows();
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
      <IconButton disabled={firstPage} onClick={handlePrev}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton disabled={lastPage} onClick={handleNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Stack>
  );
}
