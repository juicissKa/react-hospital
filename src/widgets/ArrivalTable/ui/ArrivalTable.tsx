import React, { useCallback, useState } from "react";
import { DataTable } from "../../../shared/ui/DataTable";
import { convertDbTimeString } from "../../../shared/utils/time";
import {
  Box,
  Button,
  Chip,
  debounce,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  Add,
  AssignmentReturn,
  Delete,
  LocalHospital,
  Search,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  useDeleteArrivalMutation,
  useGetArrivalsQuery,
} from "../../../shared/api/arrival/arrival";

const colnames = [
  "Статус",
  "Дата поступления",
  "Дата выписки",
  "Имя пациента",
  "",
];

type ArrivalTableProps = {
  patientId?: number;
};

export const ArrivalTable: React.FC<ArrivalTableProps> = ({ patientId }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const { data: arrivals, isLoading } = useGetArrivalsQuery({
    find: searchText,
    limit: 10,
    patientId,
  });

  const [deleteArrival] = useDeleteArrivalMutation();

  const handleInputChange = useCallback(
    debounce((str: string) => {
      setSearchText(str);
    }, 400),
    []
  );

  const items = arrivals?.map((arrival) => {
    return {
      id: arrival.id,
      cells: [
        arrival.date_leave ? (
          <Chip icon={<AssignmentReturn />} color="success" label="Выписан" />
        ) : (
          <Chip icon={<LocalHospital />} color="primary" label="Лечится" />
        ),
        convertDbTimeString(arrival.date_arrive),
        arrival.date_leave ? convertDbTimeString(arrival.date_leave) : "—",
        arrival.patient.name,
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            deleteArrival(arrival.id);
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
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {!patientId && (
          <TextField
            label={"Поиск"}
            onChange={(event) => handleInputChange(event.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            placeholder="Введите имя пациента"
            sx={{ width: "100%", maxWidth: "400px" }}
          />
        )}
        <Button
          startIcon={<Add />}
          variant="contained"
          onClick={() => navigate("create")}
        >
          Добавить поступление
        </Button>
      </Box>
      <DataTable isLoading={isLoading} colnames={colnames} items={items} />
    </>
  );
};
