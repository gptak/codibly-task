import { Grid, Typography } from "@mui/material";

export default function Error() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 340,
        width: {
          xs: 250,
          sm: 400,
        },
      }}
    >
      <Grid item>
        <Typography color={"red"} textAlign="center">
          Something went wrong. Please try again.
        </Typography>
      </Grid>
    </Grid>
  );
}
