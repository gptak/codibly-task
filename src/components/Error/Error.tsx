import { Grid, Typography } from "@mui/material";

export default function Error() {
  return (
    <Grid
      container
      sx={{ minHeight: 330, width: 400 }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Typography color={"red"}>Something went wrong.</Typography>
      </Grid>
    </Grid>
  );
}
