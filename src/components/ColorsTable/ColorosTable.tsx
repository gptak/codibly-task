import useColorsTable from "./useColorsTable";
import {
  TableBody,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import Error from "../Error/Error";

export default function ColorsTable() {
  const { table, error } = useColorsTable();

  return error ? (
    <Error />
  ) : (
    <TableContainer
      sx={{
        height: 340,
      }}
    >
      <Table
        sx={{
          width: {
            xs: 250,
            sm: 400,
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="left" width={50}>
              ID
            </TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((color, key) => (
            <TableRow sx={{ background: `${color.color}` }} key={key}>
              <TableCell align="left">{color.id}</TableCell>
              <TableCell align="left">{color.name}</TableCell>
              <TableCell align="right">{color.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
