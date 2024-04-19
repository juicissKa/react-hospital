import React from "react";
import { CreatePatientForm } from "../../../../widgets/CreatePatientForm/ui/CreatePatientForm";
import { PageWrapper } from "../../../../features/PageWrapper";
import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";

export const CreatePatient = () => {
  return (
    <PageWrapper>
      <Breadcrumbs />
      <CreatePatientForm />
    </PageWrapper>
  );
};
