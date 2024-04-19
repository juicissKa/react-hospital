import React from "react";
import { PageWrapper } from "../../../../features/PageWrapper";
import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export const VisitsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <PageWrapper>
      <Breadcrumbs />
      <Button onClick={() => navigate(`${location.pathname}/create`)}>
        Добавить посещение
      </Button>
    </PageWrapper>
  );
};
