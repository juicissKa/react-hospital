import React from "react";
import Grid from "@mui/material/Grid";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { DatePickerController } from "../../../../shared/ui/DatePickerController";
import { getTimeForDatePicker } from "../../../../shared/utils/time";
import { useGetAllFamilyHistoriesQuery } from "../../../../shared/api/family_history/family_history";
import { useGetAllGendersQuery } from "../../../../shared/api/gender/gender";
import { useGetAllEducationQuery } from "../../../../shared/api/education/education";
import { SelectFormControl } from "../../../../shared/ui/SelectFormControl";

type Inputs = {
  name: string;
  date_birth: Date;
  date_arrive: Date;
  date_leave: Date;
  gender_id: number;
  family_history_id: number;
  education_id: number;
  nationality_id: number;
};

export const CreatePatient = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      gender_id: 1,
      family_history_id: 1,
      education_id: 1,
    },
  });

  const { data: family_histories } = useGetAllFamilyHistoriesQuery();
  const { data: genders } = useGetAllGendersQuery();
  const { data: education } = useGetAllEducationQuery();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return family_histories && genders && education ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid>
        <TextField
          label="ФИО"
          placeholder="Иванов Иван Иванович"
          {...register("name")}
        />
        <DatePickerController
          control={control}
          name="date_birth"
          label="Дата рождения"
        />
        <DatePickerController
          control={control}
          name="date_arrive"
          label="Дата поступления"
          defaultValue={getTimeForDatePicker(new Date().toLocaleDateString())}
        />
        <DatePickerController
          control={control}
          name="date_leave"
          label="Дата выписки"
          defaultValue={getTimeForDatePicker(new Date().toLocaleDateString())}
        />
        <SelectFormControl
          label="Пол"
          labelId="gender-label"
          register={register}
          name="gender_id"
          items={genders}
        />
        <SelectFormControl
          label="Семейный анамнез"
          labelId="family-history-label"
          register={register}
          name="family_history_id"
          items={family_histories}
        />
        <SelectFormControl
          label="Образование"
          labelId="education-label"
          register={register}
          name="education_id"
          items={education}
        />

        <Button type="submit">СОЗДАТЬ</Button>
      </Grid>
    </form>
  ) : (
    <></>
  );
};
