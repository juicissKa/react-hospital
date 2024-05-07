import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import { MainInfoStep } from "./Steps/MainInfoStep";
import { IllnessesStep } from "./Steps/IllnessesStep";
import { TestsStep } from "./Steps/TestsStep";
import {
  Control,
  SubmitHandler,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";
import { VisitData } from "../../CreateVisitForm";
import { VisitFormData } from "../../../../../shared/api/visit/model/model";

interface CreateVisitFormStepperProps {
  visitFormData: VisitFormData;
}

export const CreateVisitFormStepper: React.FC<CreateVisitFormStepperProps> = ({
  visitFormData,
}) => {
  const [patientId, setPatientId] = useState<null | number>(null);
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    {
      label: "Укажите основную информацию",
      component: (
        <MainInfoStep
          patientId={patientId}
          setPatientId={setPatientId}
          data={visitFormData.mainInfo}
          setActiveStep={setActiveStep}
        />
      ),
    },
    {
      label: "Укажите болезни",
      component: (
        <IllnessesStep
          patientId={patientId}
          data={visitFormData.illnesses}
          setActiveStep={setActiveStep}
        />
      ),
    },
    {
      label: "Добавьте анализы",
      component: <TestsStep data={visitFormData.tests} />,
    },
  ];

  const handleBack = () => {
    setActiveStep((state) => state - 1);
  };

  const handleNext = () => {
    setActiveStep((state) => state + 1);
  };

  const handleSubmit = () => {};

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
    </>
  );
};
