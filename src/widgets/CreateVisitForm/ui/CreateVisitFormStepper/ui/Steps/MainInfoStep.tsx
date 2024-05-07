import { Grid } from "@mui/material";
import React, { useState } from "react";
import { DatePickerGrid } from "../../../../../../shared/ui/DatePickerGrid";
import { SelectGrid } from "../../../../../../shared/ui/SelectGrid";
import { TextFieldGrid } from "../../../../../../shared/ui/TextFieldGrid";
import { HideableSection } from "../../../../../../features/HideableSection";
import { CheckboxGrid } from "../../../../../../shared/ui/CheckboxGrid";
import { FormProvider, useForm } from "react-hook-form";
import { AutocompleteGrid } from "../../../../../../shared/ui/AutocompleteGrid";
import { VisitFormData } from "../../../../../../shared/api/visit/model/model";
import { useGetPatientsQuery } from "../../../../../../shared/api/patient/patient";
import { convertDbTimeString } from "../../../../../../shared/utils/time";
import { StepperPagination } from "../StepperPagination";

type VisitMainInfoData = {
  date_arrive: Date;
  date_leave: Date;
  date_visit: Date;
  apnea_id: number;
  appearance_id: number;
  visit_number_id: number;
  health_group_id: number;
  physical_activity_id: number;
  vn_days: number;
  him: number;
  gynecology?: {
    status_id: number;
  };
  botulinum_therapy: boolean;
  is_upcoming_dispansery: boolean;
  is_medical_examination: boolean;
  hospitalization?: {
    type_id: number;
    hours: number;
  };
};

type MainInfoStepProps = {
  patientId: number | null;
  setPatientId: React.Dispatch<React.SetStateAction<number | null>>;
  data: VisitFormData["mainInfo"];
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

export const MainInfoStep: React.FC<MainInfoStepProps> = ({
  patientId,
  setPatientId,
  data,
  setActiveStep,
}) => {
  const [gender, setGender] = useState("мужской");
  const [inputText, setInputText] = useState("");

  const methods = useForm<VisitMainInfoData>({
    defaultValues: {
      apnea_id: 1,
      appearance_id: 1,
      visit_number_id: 1,
      health_group_id: 1,
      physical_activity_id: 1,
      vn_days: 0,
      him: 1,
      botulinum_therapy: false,
      is_upcoming_dispansery: false,
      is_medical_examination: false,
    },
  });

  const { data: patients, isLoading } = useGetPatientsQuery({
    find: inputText,
    limit: 10,
  });

  const handleAutocompleteChange = (_: any, value: number | null) => {
    setPatientId(value);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    setActiveStep((prev) => prev + 1);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={2} marginTop={1}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <AutocompleteGrid
                label={"Пациент"}
                handleChange={handleAutocompleteChange}
                onInputChange={setInputText}
                options={patients?.map((patient) => ({
                  id: patient.id,
                  label: `${patient.name}, ${convertDbTimeString(
                    patient.date_birth
                  )}`,
                }))}
              />
            </Grid>
          </Grid>
          {patientId && (
            <>
              <DatePickerGrid
                label="Дата поступления"
                {...methods.register("date_arrive")}
                required
              />
              <DatePickerGrid
                label="Дата выписки"
                {...methods.register("date_leave")}
                required
              />
              <DatePickerGrid
                label="Дата посещения"
                {...methods.register("date_visit")}
                required
              />
              <SelectGrid
                {...methods.register("appearance_id")}
                items={data.appearances}
                label={"Явки"}
                labelId={"appearance-label"}
                required
              />
              <SelectGrid
                {...methods.register("visit_number_id")}
                items={data.visit_numbers}
                label={"Номер визита"}
                labelId={"visit-number-label"}
                required
              />
              <SelectGrid
                {...methods.register("health_group_id")}
                items={data.health_groups}
                label={"Группа здоровья"}
                labelId={"health-group-label"}
                required
              />
              <SelectGrid
                {...methods.register("physical_activity_id")}
                items={data.physical_activities}
                label={"Физическая активность"}
                labelId={"health-group-label"}
                required
              />
              <TextFieldGrid
                type="number"
                label={"Дни ВН"}
                name="vn_days"
                required
              />
              <SelectGrid
                {...methods.register("him")}
                items={[
                  { id: 1, value: "1" },
                  { id: 2, value: "2" },
                  { id: 3, value: "3" },
                  { id: 4, value: "4" },
                ]}
                label={"ХИМ до"}
                labelId={"him-label"}
                required
              />
              <SelectGrid
                {...methods.register("apnea_id")}
                items={data.apneas}
                label={"Апноэ"}
                labelId={"apnea-label"}
                required
              />
              {gender === "женский" && (
                <>
                  <SelectGrid
                    {...methods.register("gynecology.status_id")}
                    items={data.gynecology.statuses}
                    label={"Гинекологический статус"}
                    labelId={"gynecology-status-label"}
                    required
                  />
                  <CheckboxGrid
                    label="Противозачаточные"
                    name="birth_control_pills"
                  />
                </>
              )}
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <CheckboxGrid
                    label={"Диспансеризация в ближайший год"}
                    name="is_upcoming_dispansery"
                  />
                  <CheckboxGrid
                    label={"Профосмотр"}
                    name="is_medical_examination"
                  />
                </Grid>
              </Grid>

              <CheckboxGrid
                label="Ботулиновая терапия"
                name="botulinum_therapy"
              />
              <Grid item xs={12}>
                <HideableSection label="Госпитализация">
                  <SelectGrid
                    {...methods.register("hospitalization.type_id")}
                    items={data.hospitalization.types}
                    label={"Госпитализация"}
                    labelId={"hospitalization-label"}
                    defaultValue={1}
                    required
                  />
                  <TextFieldGrid
                    type="number"
                    label={"Часы госпитализации"}
                    name="hospitalization.hours"
                    defaultValue={0}
                    required
                  />
                </HideableSection>
              </Grid>
            </>
          )}
        </Grid>
        <StepperPagination text={"Далее"} />
      </form>
    </FormProvider>
  );
};
