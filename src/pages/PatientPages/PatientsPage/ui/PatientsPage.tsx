import React from "react";
import { PageWrapper } from "../../../../features/PageWrapper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PatientTable } from "../../../../widgets/PatientTable";
import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";

export const PatientsPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Breadcrumbs />
      <Button onClick={() => navigate("create")}>Добавить пациента</Button>
      <PatientTable />
    </PageWrapper>
  );
};
