import { Button, Grid, MenuItem } from "@mui/material";
import React, { useState } from "react";

import { Form } from "react-final-form";
import { TextField, Select, DatePicker, Radios, Checkboxes } from "mui-rff";
import DisabledPersonSection from "./DisabledPersonSection";
import axios from "axios";

const options: Record<
  string,
  string[]
> = require("../../json/select-options.json");

const initialValues = {
  visitNumber: 1,
  arrivals: 1,
  gender: 1,
  healthGroup: 1,
  physicalActivity: 0,
  familyStory: 1,
  isDisabledPerson: false,
  medicalExamination: false,
  dispansery: false,
};

const genderData = [
  { label: "Мужской", value: 1 },
  { label: "Женский", value: 2 },
];
const dispanseryData = { label: "Диспансеризация", value: 1 };
const medicalExaminationData = { label: "Профосмотр", value: 1 };
const isDisabledPersonData = {
  label: "Инвалидность",
  value: true,
};

const AddModalForm: React.FC = () => {
  const [isDisabledPersonChecked, setIsDisabledPersonChecked] = useState(false);

  const onSubmit = (values: any) => {
    console.log(values);
    axios
      .post("http://localhost:3001/patients", values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      subscription={{ submitting: true }}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} style={{ backgroundColor: "white" }}>
          <Grid
            container
            spacing={2}
            padding={2}
            sx={{
              "& .MuiGrid-item": { "& .MuiTextField-root": { width: "100%" } },
            }}
          >
            <Grid item xs={6}>
              <TextField
                name={"patientNumber"}
                label={"Номер пациента"}
                type={"number"}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                name="visitNumber"
                label={"Номер визита"}
                sx={{ width: "100%" }}
                required
              >
                {options.visitNumbers.map((item, index) => (
                  <MenuItem key={`visitNumber${index}`} value={index + 1}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField name={"patientName"} label={"ФИО пациента"} required />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name={"age"}
                label={"Возраст"}
                type={"number"}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <DatePicker name={"dateArrive"} label={"Дата поступления"} />
            </Grid>
            <Grid item xs={6}>
              <DatePicker name={"dateLeave"} label={"Дата выписки"} />
            </Grid>
            <Grid item xs={6}>
              <TextField name={"ibNumber"} label={"№ и б"} type={"number"} />
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                name={"dateExamination"}
                label={"Дата осмотра"}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                name="arrivals"
                label={"Явки"}
                sx={{ width: "100%" }}
                required
              >
                {options.arrivals.map((item, index) => (
                  <MenuItem key={`arrivals${index}`} value={index + 1}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select
                name="healthGroup"
                label={"Группа здоровья"}
                sx={{ width: "100%" }}
                required
              >
                {options.healthGroup.map((item, index) => (
                  <MenuItem key={`healthGroup${index}`} value={index + 1}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Radios name="gender" label={"Пол"} data={genderData} />
            </Grid>
            <Grid item xs={4}>
              <Checkboxes name="dispansery" data={dispanseryData} />
            </Grid>
            <Grid item xs={4}>
              <Checkboxes
                name="medicalExamination"
                data={medicalExaminationData}
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                name="physicalActivity"
                label={"Физическая активность"}
                sx={{ width: "100%" }}
                required
              >
                {options.physicalActivity.map((item, index) => (
                  <MenuItem key={`physicalActivity${index}`} value={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select
                name="familyStory"
                label={"Семейный анамнез"}
                sx={{ width: "100%" }}
                required
              >
                {options.familyStory.map((item, index) => (
                  <MenuItem key={`familyStory${index}`} value={index + 1}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Checkboxes
                name="isDisabledPerson"
                data={isDisabledPersonData}
                checked={isDisabledPersonChecked}
                onClick={() => setIsDisabledPersonChecked((state) => !state)}
              />
              {isDisabledPersonChecked && <DisabledPersonSection />}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit">Добавить пациента</Button>
            </Grid>
          </Grid>
        </form>
      )}
    ></Form>
  );
};

export default AddModalForm;
