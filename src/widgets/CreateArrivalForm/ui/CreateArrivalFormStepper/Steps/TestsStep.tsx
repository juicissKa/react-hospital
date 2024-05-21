import {
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
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { VisitFormData } from "../../../../../shared/api/visit/model/model";
import { AutocompleteGrid } from "../../../../../shared/ui/AutocompleteGrid";
import { Value } from "../../../../../shared/api/model";
import { Delete } from "@mui/icons-material";
import { TextField } from "../../../../../shared/ui/TextField/ui/TextField";
import { StepperPagination } from "../StepperPagination";
import { FilledFormData } from "../CreateArrivalFormStepper";
import { useCreateArrivalMutation } from "../../../../../shared/api/arrival/arrival";
import { useCreateVisitMutation } from "../../../../../shared/api/visit/visit";
import { useParams } from "react-router-dom";

export type Test = {
  id: number;
  name: string;
  value: string;
};

export type TestsStepData = {
  tests: { type_id: number; value: number; on_arrival: boolean }[];
};

type TestsStepProps = {
  data: VisitFormData["tests"];
  filledFormData: FilledFormData;
  patientId: number;
  isVisitForm?: boolean;
};

export const TestsStep: React.FC<TestsStepProps> = ({
  data,
  filledFormData: { mainInfo, illnesses },
  patientId,
  isVisitForm,
}) => {
  const params = useParams();
  const [testId, setTestId] = useState<number | null>(null);
  const methods = useForm<TestsStepData>({ defaultValues: { tests: [] } });

  const handleAutocompleteChange = (_: any, value: Value | null) => {
    if (value) setTestId(value.id);
    else setTestId(value);
  };

  const [tests, setTests] = useState<Test[]>([]);
  const { append, remove, fields } = useFieldArray<TestsStepData>({
    control: methods.control,
    name: "tests",
  });

  const handleTestAddition = () => {
    if (testId) {
      if (!tests.find((test) => test.id === testId)) {
        setTests((prev) => [
          ...prev,
          {
            id: testId,
            name: data.types.find((test) => test.id === testId)?.value || "",
            value: "",
          },
        ]);
        append({ type_id: testId, value: 0, on_arrival: true });
      }
    }
  };

  const handleTestRemoval = (id: number) => {
    const index = fields.findIndex((field) => field.type_id === id);
    setTests((prev) => prev.filter((test, i) => index !== i));
    index !== -1 && remove(index);
  };

  const [createArrival] = useCreateArrivalMutation();
  const [createVisit] = useCreateVisitMutation();

  const onSubmit = async (data: TestsStepData) => {
    const { date_arrive, ...restMainInfo } = mainInfo;
    const visit = {
      ...restMainInfo,
      date_visit: date_arrive,
      illnesses,
      ...data,
    };
    if (isVisitForm) {
      await createVisit({ arrival_id: params.arrivalId, visit });
    } else {
      const preparedData = {
        patient_id: patientId,
        date_arrive,
        visit,
      };
      console.log(preparedData);
      await createArrival(preparedData);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
                          name={`tests.${index}.value`}
                          required
                          placeholder="0.00"
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleTestRemoval(test.id)}>
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
        <StepperPagination
          text={isVisitForm ? "Создать посещение" : "Создать постпление"}
        />
      </form>
    </FormProvider>
  );
};
