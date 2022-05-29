import NumberInput from "../NumberInput/NumberInput";
import ColorsTable from "../ColorsTable/ColorosTable";
import Arrows from "../Arrows/Arrows";
import Error from "../Error/Error";
import useApp from "./useApp";
import { Grid, Card, CardContent } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledGridContainer } from "./App.styled";

function App() {
  const { error } = useApp();

  return (
    <>
      <CssBaseline />
      <StyledGridContainer
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <NumberInput />
              {error ? <Error /> : <ColorsTable />}
              <Arrows />
            </CardContent>
          </Card>
        </Grid>
      </StyledGridContainer>
    </>
  );
}

export default App;
