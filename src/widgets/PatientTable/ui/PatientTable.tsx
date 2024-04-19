import React from "react";
import { DataTable } from "../../../shared/ui/DataTable";
import { useGetPatientsQuery } from "../../../shared/api/patient/patient";
import { convertDbTimeString } from "../../../shared/utils/time";

const colnames = ["ФИО", "Дата рождения", "Пол", "№ истории болезни"];

export const PatientTable = () => {
  const { data: patients, isLoading } = useGetPatientsQuery({});

  const items = patients?.map((patient) => {
    return {
      id: patient.id,
      cells: [
        patient.name,
        convertDbTimeString(patient.date_birth),
        patient.gender.value,
        patient.ib,
      ],
    };
  });

  return <DataTable isLoading={isLoading} colnames={colnames} items={items} />;
};
