import useColorTable from "./useColorstable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import {
  StyledTable,
  StyledTableContainer,
  StyledTableCell,
} from "./ColorTable.styled";

export default function ColorsTable() {
  const { table } = useColorTable();

  return (
    <StyledTableContainer>
      <StyledTable aria-label="color table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((color, key) => (
            <TableRow sx={{ background: `${color.color}` }} key={key}>
              <StyledTableCell align="left">{color.id}</StyledTableCell>
              <TableCell align="left">{color.name}</TableCell>
              <TableCell align="right">{color.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}
