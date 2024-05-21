import { Box, Typography } from "@mui/material";
import React from "react";
import { convertDbTimeString } from "../../../shared/utils/time";

type VisitBaseInfoProps = {
  data: {
    arrival: {
      patient: {
        name: string;
      };
    };
    date_visit: string;
  };
};

export const VisitBaseInfo: React.FC<VisitBaseInfoProps> = ({ data }) => {
  const { date_visit, arrival } = data;
  return (
    <Box display={"flex"} flexDirection={"row"} gap={"60px"}>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginTop: "20px",
            "& .MuiTypography-root": {
              fontSize: "1.25rem",
            },
          }}
        >
          <Typography>Имя пациента: {arrival.patient.name}</Typography>
          <Typography>Дата: {convertDbTimeString(date_visit)}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
