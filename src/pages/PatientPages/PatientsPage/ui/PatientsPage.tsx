import React from "react";
import { PageWrapper } from "../../../../features/PageWrapper";
import { PatientTable } from "../../../../widgets/PatientTable";
import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";

export const PatientsPage: React.FC = () => {
  return (
    <PageWrapper>
      <Breadcrumbs />
      <PatientTable />
    </PageWrapper>
  );
};
