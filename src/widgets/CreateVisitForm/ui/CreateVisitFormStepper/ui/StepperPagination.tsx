import { Box, Button } from "@mui/material";
import React from "react";

type StepperPaginationProps = {
  text: string;
};

export const StepperPagination: React.FC<StepperPaginationProps> = ({
  text,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <Box sx={{ flex: "1 1 auto" }} />
      <Button type="submit">{text}</Button>
    </Box>
  );
};
