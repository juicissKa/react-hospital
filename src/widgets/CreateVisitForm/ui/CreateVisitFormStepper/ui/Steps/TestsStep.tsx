import { Box, Button, Grid, Modal } from "@mui/material";
import React, { useState } from "react";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { VisitData } from "../../../CreateVisitForm";
import { VisitFormData } from "../../../../../../shared/api/visit/model/model";
import { TextFieldGrid } from "../../../../../../shared/ui/TextFieldGrid";
import { AutocompleteGrid } from "../../../../../../shared/ui/AutocompleteGrid";
import { AddTestTable } from "../../../../../AddTestTable/ui/AddTestTable";

export type Test = {
  id: number;
  name: string;
  value: string;
  on_arrival: boolean;
};

type TestsStepProps = {
  control: Control<VisitData, any>;
  register: UseFormRegister<VisitData>;
  data: VisitFormData["tests"];
};

export const TestsStep: React.FC<TestsStepProps> = ({
  control,
  register,
  data,
}) => {
  const [tests, setTests] = useState<Test[]>([]);
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "tests",
    }
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleTestAddition = () => {};

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item xs={12}>
          <Button sx={{ width: "100%" }} onClick={() => setIsOpen(true)}>
            Добавить анализы
          </Button>
          <AddTestTable tests={tests} />
          {tests.map((test, index) => (
            <TextFieldGrid
              label={test.value}
              type="number"
              control={control}
              {...register(`tests.${index}.type_id`)}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
