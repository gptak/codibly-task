import NumberInput from "../NumberInput/NumberInput";
import ColorsTable from "../ColorsTable/ColorosTable";
import Arrows from "../Arrows/Arrows";
import Error from "../Error/Error";
import useApp from "./useApp";
import { Grid, Card, CardContent } from "@mui/material";

function App() {
  const { error } = useApp();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
      sx={{ background: "#ddd" }}
    >
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <NumberInput />
            {error ? <Error /> : <ColorsTable />}
            <Arrows />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
