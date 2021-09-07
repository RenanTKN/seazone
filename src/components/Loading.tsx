import { Box, CircularProgress } from "@material-ui/core";

export default function Loading() {
  return (
    <Box m={3} color="black" textAlign="center">
      <CircularProgress size={50} color="inherit" />
    </Box>
  );
}
