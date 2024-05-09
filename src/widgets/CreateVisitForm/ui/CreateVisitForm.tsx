import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGetVisitCreateFormDataQuery } from "../../../shared/api/visit/visit";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CreateVisitFormStepper } from "./CreateVisitFormStepper/ui/CreateVisitFormStepper";
import { Loader } from "../../../shared/ui/Loader";

export const CreateVisitForm = () => {
  const { data: visitFormData, isLoading } = useGetVisitCreateFormDataQuery();

  return isLoading ? (
    <Loader />
  ) : visitFormData ? (
    <Grid item xs={12}>
      <CreateVisitFormStepper visitFormData={visitFormData} />
    </Grid>
  ) : (
    <></>
  );
};
