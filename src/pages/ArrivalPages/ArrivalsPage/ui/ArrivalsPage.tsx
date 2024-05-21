import React from "react";
import { PageWrapper } from "../../../../features/PageWrapper";
import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";
import { ArrivalTable } from "../../../../widgets/ArrivalTable";

export const ArrivalsPage = () => {
  return (
    <PageWrapper>
      <Breadcrumbs />
      <ArrivalTable />
    </PageWrapper>
  );
};
