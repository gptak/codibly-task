import NumberInput from "../NumberInput/NumberInput";
import ColorsTable from "../ColorsTable/ColorosTable";
import Arrows from "../Arrows/Arrows";
import { Grid, Card, CardContent } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", background: "#555555" }}
      >
        <Grid item>
          <Card>
            <CardContent>
              <NumberInput />
              <ColorsTable />
              <Arrows />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
