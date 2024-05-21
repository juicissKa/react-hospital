import React from "react";
import { PageWrapper } from "../../../../features/PageWrapper";
import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";
import { CreateArrivalForm } from "../../../../widgets/CreateArrivalForm";

export const CreateArrivalPage = () => {
  return (
    <PageWrapper>
      <Breadcrumbs />
      <CreateArrivalForm />
    </PageWrapper>
  );
};
