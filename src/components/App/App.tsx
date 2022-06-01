import NumberInput from "../NumberInput/NumberInput";
import ColorsTable from "../ColorsTable/ColorsTable";
import Arrows from "../Arrows/Arrows";
import { Box, Card, CardContent } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "#555555",
        }}
      >
        <Card>
          <CardContent>
            <NumberInput />
            <ColorsTable />
            <Arrows />
          </CardContent>
        </Card>
      </Box>
    </BrowserRouter>
  );
}

export default App;
