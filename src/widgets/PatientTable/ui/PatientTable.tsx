import React, { useCallback, useState } from "react";
import { DataTable } from "../../../shared/ui/DataTable";
import {
  useDeletePatientMutation,
  useGetPatientsQuery,
} from "../../../shared/api/patient/patient";
import { convertDbTimeString } from "../../../shared/utils/time";
import {
  Box,
  Button,
  debounce,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Add, Delete, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const colnames = ["ФИО", "Дата рождения", "Пол", "№ истории болезни", ""];

export const PatientTable: React.FC = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const { data: patients, isLoading } = useGetPatientsQuery({
    find: searchText,
    limit: 10,
  });

  const [deletePatient] = useDeletePatientMutation();

  const handleInputChange = useCallback(
    debounce((str: string) => {
      setSearchText(str);
    }, 400),
    []
  );

  const items = patients?.map((patient) => {
    return {
      id: patient.id,
      cells: [
        patient.name,
        convertDbTimeString(patient.date_birth),
        patient.gender.value,
        patient.ib,
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            deletePatient(patient.id);
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
        <Button
          startIcon={<Add />}
          variant="contained"
          onClick={() => navigate("create")}
        >
          Добавить пациента
        </Button>
      </Box>
      <DataTable isLoading={isLoading} colnames={colnames} items={items} />
    </>
  );
};
