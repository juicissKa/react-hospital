import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import { MainInfoStep } from "./Steps/MainInfoStep";
import { IllnessesStep } from "./Steps/IllnessesStep";
import { TestsStep } from "./Steps/TestsStep";
import { Control, UseFormRegister } from "react-hook-form";
import { VisitData } from "../../CreateVisitForm";
import { VisitFormData } from "../../../../../shared/api/visit/model/model";

interface CreateVisitFormStepperProps {
  control: Control<VisitData, any>;
  register: UseFormRegister<VisitData>;
  visitFormData: VisitFormData;
}

export const CreateVisitFormStepper: React.FC<CreateVisitFormStepperProps> = ({
  control,
  register,
  visitFormData,
}) => {
  const [patientId, setPatientId] = useState<null | number>(null);

  const STEPS = [
    {
      label: "Укажите основную информацию",
      component: (
        <MainInfoStep
          control={control}
          register={register}
          patientId={patientId}
          setPatientId={setPatientId}
          data={visitFormData.mainInfo}
        />
      ),
    },
    {
      label: "Укажите болезни",
      component: (
        <IllnessesStep
          control={control}
          register={register}
          patientId={patientId}
          data={visitFormData.illnesses}
        />
      ),
    },
    {
      label: "Добавьте анализы",
      component: (
        <TestsStep
          control={control}
          register={register}
          data={visitFormData.tests}
        />
      ),
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((state) => state - 1);
  };

  const handleNext = () => {
    setActiveStep((state) => state + 1);
  };

  return (
    <>
      <Stepper activeStep={activeStep}>
        {STEPS.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {STEPS[activeStep].component}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          Назад
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleNext}>
          {activeStep === STEPS.length - 1 ? "Создать посещение" : "Далее"}
        </Button>
      </Box>
    </>
  );
};
