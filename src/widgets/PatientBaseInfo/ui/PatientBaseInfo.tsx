import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

interface PatientBaseInfoProps {
  name: string;
  gender: string;
  ib: string;
  date_birth: string;
}

export const PatientBaseInfo: React.FC<PatientBaseInfoProps> = ({
  name,
  gender,
  ib,
  date_birth,
}) => {
  return (
    <Box display={"flex"} flexDirection={"row"} gap={"60px"}>
      <Avatar sx={{ width: 200, height: 200 }} />
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Typography fontSize={"2rem"} fontWeight={"bold"}>
          {name}
        </Typography>
        <Box
          sx={{
            marginTop: "20px",
            "& .MuiTypography-root": {
              fontSize: "1.25rem",
            },
          }}
        >
          <Typography>Пол: {gender}</Typography>
          <Typography>Дата рождения: {date_birth}</Typography>
          <Typography>№ истории болезни: {ib}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
