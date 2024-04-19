import { Grid } from "@mui/material";
import React from "react";
import { SelectGrid } from "../../../../../../../shared/ui/SelectGrid";
import { VisitFormData } from "../../../../../../../shared/api/visit/model/model";

type Props = {
  data: VisitFormData["illnesses"]["heart_issue"]["fibrillation"];
};

export const Fibrillation: React.FC<Props> = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <SelectGrid
        name="heart_issue.atrial_fibrillation_id"
        items={data.duration_type}
        label={"Фибриляция предсердий"}
        labelId={"heart-failure-atrial-firbrillation-label"}
      />
      <SelectGrid
        name="heart_issue.atrial_fibrillation_type_id"
        items={data.type}
        label={"Фибриляция предсердий (ЧСС)"}
        labelId={"heart-failure-atrial-firbrillation-type-label"}
      />
      <SelectGrid
        name="heart_issue.atrial_fibrillation_treatment_id"
        items={data.treatments}
        label={"Лечение фибриляции предсердий"}
        labelId={"heart-failure-atrial-firbrillation-treatment-label"}
      />
    </Grid>
  );
};
