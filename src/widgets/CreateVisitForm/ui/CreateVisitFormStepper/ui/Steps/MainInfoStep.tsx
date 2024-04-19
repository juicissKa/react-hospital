import { Grid } from "@mui/material";
import React, { useState } from "react";
import { DatePickerGrid } from "../../../../../../shared/ui/DatePickerGrid";
import { SelectGrid } from "../../../../../../shared/ui/SelectGrid";
import { TextFieldGrid } from "../../../../../../shared/ui/TextFieldGrid";
import { HideableSection } from "../../../../../../features/HideableSection";
import { CheckboxGrid } from "../../../../../../shared/ui/CheckboxGrid";
import { Control, UseFormRegister } from "react-hook-form";
import { VisitData } from "../../../CreateVisitForm";
import { AutocompleteGrid } from "../../../../../../shared/ui/AutocompleteGrid";
import { VisitFormData } from "../../../../../../shared/api/visit/model/model";
import { useGetPatientsQuery } from "../../../../../../shared/api/patient/patient";
import { convertDbTimeString } from "../../../../../../shared/utils/time";

type MainInfoStepProps = {
  control: Control<VisitData, any>;
  register: UseFormRegister<VisitData>;
  patientId: number | null;
  setPatientId: React.Dispatch<React.SetStateAction<number | null>>;
  data: VisitFormData["mainInfo"];
};

export const MainInfoStep: React.FC<MainInfoStepProps> = ({
  control,
  register,
  patientId,
  setPatientId,
  data,
}) => {
  const [gender, setGender] = useState("мужской");
  const [inputText, setInputText] = useState("");

  const { data: patients, isLoading } = useGetPatientsQuery({
    find: inputText,
    limit: 10,
  });

  const handleAutocompleteChange = (_: any, value: number | null) => {
    setPatientId(value);
  };

  return (
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
            control={control}
            name="date_arrive"
          />
          <DatePickerGrid
            label="Дата выписки"
            control={control}
            name="date_leave"
          />
          <DatePickerGrid
            label="Дата посещения"
            control={control}
            name="date_visit"
          />
          <SelectGrid
            name="appearance_id"
            items={data.appearances}
            label={"Явки"}
            labelId={"appearance-label"}
          />
          <SelectGrid
            name="visit_number_id"
            items={data.visit_numbers}
            label={"Номер визита"}
            labelId={"visit-number-label"}
          />
          <SelectGrid
            name="health_group_id"
            items={data.health_groups}
            label={"Группа здоровья"}
            labelId={"health-group-label"}
          />
          <SelectGrid
            name="physical_activity_id"
            items={data.physical_activities}
            label={"Физическая активность"}
            labelId={"health-group-label"}
          />
          <TextFieldGrid
            type="number"
            label={"Дни ВН"}
            control={control}
            {...register("vn_days")}
          />
          <SelectGrid
            name="him"
            items={[
              { id: 1, value: "1" },
              { id: 2, value: "2" },
              { id: 3, value: "3" },
              { id: 4, value: "4" },
            ]}
            label={"ХИМ до"}
            labelId={"him-label"}
          />
          <SelectGrid
            name="apnea_id"
            items={data.apneas}
            label={"Апноэ"}
            labelId={"apnea-label"}
          />
          {gender === "женский" && (
            <>
              <SelectGrid
                name="gynecology.status_id"
                items={data.gynecology.statuses}
                label={"Гинекологический статус"}
                labelId={"gynecology-status-label"}
              />
              <CheckboxGrid label="Противозачаточные" />
            </>
          )}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <CheckboxGrid label={"Диспансеризация в ближайший год"} />
              <CheckboxGrid label={"Профосмотр"} />
            </Grid>
          </Grid>

          <CheckboxGrid label="Ботулиновая терапия" />
          <Grid item xs={12}>
            <HideableSection label="Госпитализация">
              <SelectGrid
                name="hospitalization.type_id"
                items={data.hospitalization.types}
                label={"Госпитализация"}
                labelId={"hospitalization-label"}
              />
              <TextFieldGrid
                type="number"
                label={"Часы госпитализации"}
                control={control}
                {...register("hospitalization.hours")}
              />
            </HideableSection>
          </Grid>
        </>
      )}
    </Grid>
  );
};
