import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const StyledErrorContainer = styled(Grid)(({ theme }) => ({
  width: 250,
  height: 340,
  [theme.breakpoints.up("sm")]: {
    width: 400,
  },
}));
