import { Box, Typography } from "@mui/material";
import useError from "./useError";
import { errorMessages } from "../../config/config";

export default function Error() {
  const { errorMessage } = useError();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 6,
        height: 340,
        width: {
          xs: 250,
          sm: 400,
        },
      }}
    >
      <Typography color={"red"} textAlign="center">
        {errorMessage ? errorMessage : errorMessages.defaultError}
      </Typography>
    </Box>
  );
}
