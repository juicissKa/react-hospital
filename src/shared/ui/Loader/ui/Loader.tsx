import { Box, CircularProgress, CircularProgressProps } from "@mui/material";
import React from "react";

export const Loader: React.FC<CircularProgressProps> = ({
  size = "8rem",
  ...restProps
}) => {
  return (
    <Box width={"100%"} display={"flex"} justifyContent={"center"}>
      <CircularProgress size={size} {...restProps} />
    </Box>
  );
};
