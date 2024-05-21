import { Grid } from "@mui/material";
import React from "react";
import { SelectGrid } from "../../../../../../shared/ui/SelectGrid";
import { VisitFormData } from "../../../../../../shared/api/visit/model/model";
import { useFormContext } from "react-hook-form";

type Props = {
  data: VisitFormData["illnesses"]["heart_issue"]["extrasystole"];
};

export const Extrasystole: React.FC<Props> = ({ data }) => {
  const { register } = useFormContext();
  return (
    <Grid container spacing={2}>
      <SelectGrid
        {...register("heart_issue.extrasystole_id")}
        items={data.types}
        label={"Экстрасистолия"}
        labelId={"heart-failure-extrasystole-label"}
      />
    </Grid>
  );
};
