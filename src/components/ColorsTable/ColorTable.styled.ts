import { styled } from "@mui/material/styles";
import { Table } from "@mui/material";

export const StyledTable = styled(Table)(({ theme }) => ({
  width: 250,
  [theme.breakpoints.up("sm")]: {
    width: 400,
  },
}));
