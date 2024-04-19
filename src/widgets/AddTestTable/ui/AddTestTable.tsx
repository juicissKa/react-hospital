import React from "react";
import { DataTable } from "../../../shared/ui/DataTable";
import { useGetPatientsQuery } from "../../../shared/api/patient/patient";
import { convertDbTimeString } from "../../../shared/utils/time";
import { Test } from "../../CreateVisitForm/ui/CreateVisitFormStepper/ui/Steps/TestsStep";

const colnames = ["Тип анализа", "Значение", "По прибытии"];

type AddTestTableProps = {
  tests: Test[];
};

export const AddTestTable: React.FC<AddTestTableProps> = ({ tests }) => {
  const items = tests?.map((test) => {
    return {
      id: test.id,
      cells: [test.name, test.value, test.on_arrival],
    };
  });

  return <DataTable colnames={colnames} items={items} />;
};
