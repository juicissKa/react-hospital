import { Box, Typography } from "@mui/material";
import React from "react";
import { convertDbTimeString } from "../../../../shared/utils/time";

export type MainInfoTabProps = {
  data: {
    appearance: string;
    health_group: string;
    physical_activity: string;
    apnea: string;
    visit_number: string;
    id: number;
    date_visit: string;
    is_upcoming_dispansery: string;
    is_medical_examination: string;
    botulinum_therapy: string;
    him: string;
    vn_days: number;
    hospitalization?: {
      type: string;
      hours: number;
    };
  };
};

const MainInfoTab: React.FC<MainInfoTabProps> = ({ data }) => {
  const {
    appearance,
    health_group,
    physical_activity,
    apnea,
    visit_number,
    date_visit,
    is_medical_examination,
    is_upcoming_dispansery,
    botulinum_therapy,
    him,
    vn_days,
    hospitalization,
  } = data;

  const entries = [
    { title: "Явка", value: appearance },
    { title: "Группа здоровья", value: health_group },
    { title: "Физическая активность", value: physical_activity },
    { title: "Апноэ", value: apnea },
    { title: "Апноэ", value: apnea },
    { title: "Номер визита", value: visit_number },
    { title: "Профосмотр", value: is_medical_examination },
    { title: "Диспансеризация ближайший год", value: is_upcoming_dispansery },
    { title: "Ботулиновая терапия", value: botulinum_therapy },
    { title: "ХИМ", value: him },
    { title: "Дни ВН", value: vn_days },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {entries.map(({ title, value }) => (
        <Typography sx={{ width: "49%", fontSize: "1.25rem" }}>
          {title}: {value}
        </Typography>
      ))}
      {hospitalization && (
        <>
          <Typography sx={{ width: "100%", fontSize: "1.25rem" }} variant="h6">
            Госпитализация
          </Typography>
          <Typography sx={{ width: "49%", fontSize: "1.25rem" }}>
            Госпитализация
          </Typography>
          <Typography sx={{ width: "49%", fontSize: "1.25rem" }}>
            Часы: {hospitalization.hours}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default MainInfoTab;
