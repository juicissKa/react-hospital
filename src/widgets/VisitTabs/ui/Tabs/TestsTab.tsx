import { Box, Typography } from "@mui/material";
import React from "react";
import { Test } from "../../../CreateArrivalForm/ui/CreateArrivalFormStepper/Steps/TestsStep";
import { VisitTabsProps } from "../VisitTabs";

type TestsTabProps = {
  data: VisitTabsProps["data"]["tests"];
};

export const TestsTab: React.FC<TestsTabProps> = ({ data }) => {
  return (
    <Box>
      {data.map(({ test_type, value }, index) => (
        <Box
          sx={{
            display: "flex",
            minWidth: "300px",
            maxWidth: "600px",
            borderBottom:
              data.length - 1 === index ? undefined : "2px solid lightgray",
          }}
        >
          <Typography sx={{ padding: "20px", width: "50%" }}>
            {test_type.value}
          </Typography>
          <Typography sx={{ padding: "20px" }}>{value}</Typography>
        </Box>
      ))}
    </Box>
  );
};
