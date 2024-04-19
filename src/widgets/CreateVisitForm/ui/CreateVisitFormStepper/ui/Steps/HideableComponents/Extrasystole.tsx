import { Grid } from "@mui/material";
import React from "react";
import { SelectGrid } from "../../../../../../../shared/ui/SelectGrid";
import { VisitFormData } from "../../../../../../../shared/api/visit/model/model";

type Props = {
  data: VisitFormData["illnesses"]["heart_issue"]["extrasystole"];
};

export const Extrasystole: React.FC<Props> = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <SelectGrid
        name="heart_issue.extrasystole_id"
        items={data.types}
        label={"Экстрасистолия"}
        labelId={"heart-failure-extrasystole-label"}
      />
    </Grid>
  );
};
