import useColorTable from "./useColorstable";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function ColorsTable() {
  const { table } = useColorTable();

  return (
    <TableContainer sx={{ minHeight: 330 }}>
      <Table sx={{ minWidth: 400 }} aria-label="color table">
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
              <TableCell align="left" sx={{ width: 30 }}>
                {color.id}
              </TableCell>
              <TableCell align="left">{color.name}</TableCell>
              <TableCell align="right" sx={{ width: 50 }}>
                {color.year}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
