import React from "react";
import { PageWrapper } from "../../../../features/PageWrapper";
import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";
import { CreateVisitForm } from "../../../../widgets/CreateVisitForm";

export const CreateVisitPage = () => {
  return (
    <PageWrapper>
      <Breadcrumbs />
      <CreateVisitForm />
    </PageWrapper>
  );
};
