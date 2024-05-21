import { Box, Typography } from "@mui/material";
import React from "react";
import { Test } from "../../../CreateArrivalForm/ui/CreateArrivalFormStepper/Steps/TestsStep";
import { VisitTabsProps } from "../VisitTabs";

type TestsTabProps = {
  data: VisitTabsProps["data"]["therapies"];
};

export const TherapiesTab: React.FC<TestsTabProps> = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "50%",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {data.map((value, index) => (
        <Typography sx={{ padding: "20px" }}>
          {value}
          {data.length - 1 === index ? "" : ", "}
        </Typography>
      ))}
    </Box>
  );
};
