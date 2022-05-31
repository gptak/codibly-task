import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useArrows from "./useArrows";

export default function Arrows() {
  const { prevDisable, nextDisable, handlePrev, handleNext } = useArrows();
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ padding: 1 }}>
      <IconButton disabled={prevDisable} onClick={handlePrev}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton disabled={nextDisable} onClick={handleNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Stack>
  );
}
