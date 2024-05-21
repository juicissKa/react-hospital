import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGetVisitCreateFormDataQuery } from "../../../shared/api/visit/visit";
import { CreateArrivalFormStepper } from "./CreateArrivalFormStepper/CreateArrivalFormStepper";
import { Loader } from "../../../shared/ui/Loader";

type CreateArrivalFormProps = {
  isVisitForm?: boolean;
};

export const CreateArrivalForm: React.FC<CreateArrivalFormProps> = ({
  isVisitForm = false,
}) => {
  const { data: visitFormData, isLoading } = useGetVisitCreateFormDataQuery();

  return isLoading ? (
    <Loader />
  ) : visitFormData ? (
    <Grid item xs={12}>
      <CreateArrivalFormStepper
        visitFormData={visitFormData}
        isVisitForm={isVisitForm}
      />
    </Grid>
  ) : (
    <></>
  );
};
