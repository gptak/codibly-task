import { Grid, Typography } from "@mui/material";
import { StyledErrorContainer } from "./Error.styled";

export default function Error() {
  return (
    <StyledErrorContainer container alignItems="center" justifyContent="center">
      <Grid item>
        <Typography color={"red"} textAlign="center">
          Something went wrong. Please check logs.
        </Typography>
      </Grid>
    </StyledErrorContainer>
  );
}
