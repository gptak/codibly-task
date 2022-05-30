import { Box, Typography } from "@mui/material";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 340,
        width: {
          xs: 250,
          sm: 400,
        },
      }}
    >
      <Typography color={"red"} textAlign="center">
        Something went wrong. Please try again.
      </Typography>
    </Box>
  );
}
