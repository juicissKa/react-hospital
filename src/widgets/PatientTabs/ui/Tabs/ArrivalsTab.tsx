import { Box } from "@mui/material";
import React from "react";
import { ArrivalTable } from "../../../ArrivalTable";

type ArrivalsTabProps = {
  patientId?: number;
};

export const ArrivalsTab: React.FC<ArrivalsTabProps> = ({ patientId }) => {
  return (
    <Box sx={{ padding: "20px" }}>
      <ArrivalTable patientId={patientId} />
    </Box>
  );
};
