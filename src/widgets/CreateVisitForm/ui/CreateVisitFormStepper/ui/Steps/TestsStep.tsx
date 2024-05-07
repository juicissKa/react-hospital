import {
  Box,
  Button,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Control,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";
import { VisitData } from "../../../CreateVisitForm";
import { VisitFormData } from "../../../../../../shared/api/visit/model/model";
import { AutocompleteGrid } from "../../../../../../shared/ui/AutocompleteGrid";
import { Value } from "../../../../../../shared/api/model";
import { Delete } from "@mui/icons-material";
import { TextField } from "../../../../../../shared/ui/TextField/ui/TextField";
import { StepperPagination } from "../StepperPagination";

export type Test = {
  id: number;
  name: string;
  value: string;
  on_arrival: boolean;
};

type TestsStepProps = {
  data: VisitFormData["tests"];
};

export const TestsStep: React.FC<TestsStepProps> = ({ data }) => {
  const [testId, setTestId] = useState<number | null>(null);
  const methods = useForm({});

  const handleAutocompleteChange = (_: any, value: Value | null) => {
    if (value) setTestId(value.id);
    else setTestId(value);
  };

  const [tests, setTests] = useState<Test[]>([]);
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: methods.control,
      name: "tests",
    }
  );

  const handleTestAddition = () => {
    if (testId) {
      if (!tests.find((test) => test.id === testId)) {
        setTests((prev) => [
          ...prev,
          {
            id: testId,
            name: data.types.find((test) => test.id === testId)?.value || "",
            value: "",
            on_arrival: false,
          },
        ]);
        append({ type_id: testId, value: 0, on_arrival: false });
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form>
        <Grid container spacing={2} sx={{ marginTop: 1 }}>
          <Grid item xs={12}>
            <AutocompleteGrid
              label={"Анализы"}
              handleChange={handleAutocompleteChange}
              options={data.types?.map((test) => ({
                id: test.id,
                label: test.value,
              }))}
              xs={12}
            />
            <Button
              sx={{
                width: "100%",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              onClick={handleTestAddition}
            >
              Добавить анализы
            </Button>
            <TableContainer
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell>Результат</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tests.map((test, index) => (
                    <TableRow>
                      <TableCell>
                        <Typography>{test.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <TextField
                          type="number"
                          sx={{ width: "200" }}
                          {...methods.register(`tests.${index}.value`)}
                          placeholder="0.00"
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <Delete color="error" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </form>
      <StepperPagination text={"Создать пациента"} />
    </FormProvider>
  );
};
