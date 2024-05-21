import React, { useCallback, useState } from "react";
import { DataTable } from "../../../shared/ui/DataTable";
import {
  useDeletePatientMutation,
  useGetPatientsQuery,
} from "../../../shared/api/patient/patient";
import { convertDbTimeString } from "../../../shared/utils/time";
import { Box, Button, debounce, IconButton } from "@mui/material";
import { Add, Delete, Search } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetVisitsQuery } from "../../../shared/api/visit/visit";

const colnames = ["Дата визита", ""];

export const VisitTable: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: visits, isLoading } = useGetVisitsQuery({
    id: id as string,
    limit: 10,
  });

  const items = visits?.map((visit) => {
    return {
      id: visit.id,
      cells: [
        convertDbTimeString(visit.date_visit),
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            // deleteVisit(visit.id);
          }}
        >
          <Delete color="error" />
        </IconButton>,
      ],
    };
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          width: "100%",
        }}
      >
        <Button
          startIcon={<Add />}
          variant="contained"
          onClick={() => navigate("visits/create")}
        >
          Добавить посещение
        </Button>
      </Box>
      <DataTable
        redirectUrl="visits"
        isLoading={isLoading}
        colnames={colnames}
        items={items}
      />
    </>
  );
};
