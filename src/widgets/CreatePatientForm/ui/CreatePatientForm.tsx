import React from "react";
import Grid from "@mui/material/Grid";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Button, CircularProgress, TextField } from "@mui/material";
import { DatePickerGrid } from "../../../shared/ui/DatePickerGrid";
import { getTimeForDatePicker } from "../../../shared/utils/time";
import { SelectGrid } from "../../../shared/ui/SelectGrid";
import { HideableSection } from "../../../features/HideableSection";
import {
  useCreatePatientMutation,
  useGetPatientCreateFormDataQuery,
} from "../../../shared/api/patient/patient";
import { TextFieldGrid } from "../../../shared/ui/TextFieldGrid";
import { Loader } from "../../../shared/ui/Loader";

export type PatientData = {
  name: string;
  date_birth: Date;
  date_arrive: Date;
  date_leave: Date;
  ib: string;
  gender_id: number;
  family_history_id: number;
  education_id: number;
  nationality_id: number;
  children: number;

  migration: {
    region_id: number;
  };
  disability: {
    group_id: number;
    date: Date;
  };
  occupation: {
    type_id: number;
    harm_id: number;
  };

  bad_habits_id: number;
  somatotype_id: number;
  past_illnesses_id: number;
};

export const CreatePatientForm: React.FC = () => {
  const methods = useForm<PatientData>({
    defaultValues: {
      gender_id: 1,
      disability: {
        group_id: 1,
      },
      name: "",
      ib: "",
      migration: {
        region_id: 1,
      },
      nationality_id: 1,
      somatotype_id: 1,
    },
  });

  const { data, isLoading } = useGetPatientCreateFormDataQuery();

  const [createPatient] = useCreatePatientMutation();

  const onSubmit: SubmitHandler<PatientData> = (data) => {
    createPatient(data);
  };

  return isLoading ? (
    <Loader />
  ) : data ? (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <TextFieldGrid
            label="ФИО"
            placeholder="Иванов Иван Иванович"
            name="name"
          />
          <DatePickerGrid name="date_birth" label="Дата рождения" />

          <TextFieldGrid
            label="№ истории болезни"
            placeholder="1234"
            name="ib"
          />

          <SelectGrid
            label="Пол"
            labelId="gender-label"
            {...methods.register("gender_id")}
            items={data.genders}
          />
          <SelectGrid
            label="Национальность"
            labelId="nationality-label"
            {...methods.register("nationality_id")}
            items={data.nationalities}
          />
          <SelectGrid
            label="Соматотип"
            labelId="somatotype-label"
            {...methods.register("somatotype_id")}
            items={data.somatotypes}
          />
          <Grid item xs={12}>
            <HideableSection
              label="Мигрант"
              name="migration"
              render={() => (
                <>
                  <SelectGrid
                    label="Регион эмиграции"
                    labelId="region-label"
                    {...methods.register("migration.region_id")}
                    items={data.migration.regions}
                  />
                  <DatePickerGrid
                    label="Дата эмиграции"
                    name="migration.date"
                  />
                </>
              )}
            />
          </Grid>
          <Grid item>
            <Button type="submit">СОЗДАТЬ</Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  ) : (
    <></>
  );
};
