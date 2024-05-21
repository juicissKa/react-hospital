import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import { convertDbTimeString } from "../../../shared/utils/time";
import { AssignmentReturn, LocalHospital } from "@mui/icons-material";
import { VisitTable } from "../../VisitTable";

type ArrivalBaseInfoProps = {
  data: {
    date_arrive: string;
    date_leave: string;
    patient: {
      id: number;
      name: string;
    };
    visit: [
      {
        id: number;
        date_visit: string;
      }
    ];
  };
};

export const ArrivalBaseInfo: React.FC<ArrivalBaseInfoProps> = ({ data }) => {
  const { date_arrive, date_leave, patient, visit } = data;
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
          <Typography>Имя пациента: {patient.name}</Typography>
          <Typography>
            Дата поступления: {convertDbTimeString(date_arrive)}
          </Typography>
          {date_leave && (
            <Typography>
              Дата выписки: {convertDbTimeString(date_arrive)}
            </Typography>
          )}
          <Box sx={{ marginTop: "20px" }}>
            {date_leave ? (
              <Chip
                icon={<AssignmentReturn />}
                color="success"
                label="Выписан"
              />
            ) : (
              <Chip icon={<LocalHospital />} color="primary" label="Лечится" />
            )}
          </Box>
        </Box>
        <VisitTable />
      </Box>
    </Box>
  );
};
