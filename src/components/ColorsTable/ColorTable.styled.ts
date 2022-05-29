import { styled } from "@mui/material/styles";
import { Table, TableContainer, TableCell } from "@mui/material";

export const StyledTable = styled(Table)(({ theme }) => ({
  width: 250,
  [theme.breakpoints.up("sm")]: {
    width: 400,
  },
}));

export const StyledTableContainer = styled(TableContainer)(() => ({
  height: 340,
}));

export const StyledTableCell = styled(TableCell)(() => ({
  width: 50,
}));
