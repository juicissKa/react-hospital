import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGetVisitCreateFormDataQuery } from "../../../shared/api/visit/visit";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateVisitFormStepper } from "./CreateVisitFormStepper/ui/CreateVisitFormStepper";
import { Loader } from "../../../shared/ui/Loader";

export interface VisitData {
  date_arrive: Date;
  date_leave: Date;
  date_visit: Date;
  vn_days: number;
  appearance_id: number;
  hospitalization: {
    hours: number;
  };
  disability: {
    type_id: number;
    treatment_id: number;
    hemoglobin_level: number;
    genotype: boolean;
    compensation_id: number;
    target_organs_id: number;
    him_stage: number;
  };
  diabete: {
    type_id: number;
    treatment_id: number;
    sugar_before_eating: number;
    sugar_after_eating: number;
  };
  nervous_system: {
    polyneuropathy_id: number;
    mononeuritis: number;
    complication_id: number;
    atherosclerosis_id: number;
  };
  tests: {
    type_id: number;
    on_arrival: boolean;
    value: number;
  }[];
}

export const CreateVisitForm = () => {
  const [patientId, setPatientId] = useState<number | null>(null);

  const handleAutocompleteChange = (_: React.SyntheticEvent, value: any) => {
    value ? setPatientId(value.id) : setPatientId(null);
  };

  const { data: visitFormData, isLoading } = useGetVisitCreateFormDataQuery();

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<VisitData>({});

  const onSubmit: SubmitHandler<VisitData> = (data) => {};

  return isLoading ? (
    <Loader />
  ) : visitFormData ? (
    <Grid item xs={12}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CreateVisitFormStepper
          visitFormData={visitFormData}
          control={control}
          register={register}
        />
      </form>
    </Grid>
  ) : (
    <></>
  );
};
