import { Box, Typography } from "@mui/material";
import React from "react";
import { convertDbTimeString } from "../../../../shared/utils/time";

export type MainInfoTabProps = {
  data: {
    nationality: { value: string };
    somatotype: { value: string };
    migration?: {
      region: { value: string };
      date: { value: string };
    };
  };
};

export const MainInfoTab: React.FC<MainInfoTabProps> = ({ data }) => {
  const { nationality, somatotype, migration } = data;

  const entries = [
    { title: "Национальность", value: nationality.value },
    { title: "Соматотип", value: somatotype.value },
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
      {/* {migration && (
      <>
        <Typography sx={{ width: "100%" }} variant="h6">
          Миграция
        </Typography>
        <Typography sx={{ width: "49%" }}>
          Регион эмиграции: {migration.region.value}
        </Typography>
        <Typography sx={{ width: "49%" }}>
          Дата: {convertDbTimeString(migration.date.value)}
        </Typography>
      </>
    )} */}
    </Box>
  );
};

export default MainInfoTab;
