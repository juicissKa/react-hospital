import { Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import { MainInfoStep, MainInfoStepData } from "./Steps/MainInfoStep";
import { IllnessesStepData, IllnessesStep } from "./Steps/IllnessesStep";
import { TestsStep, TestsStepData } from "./Steps/TestsStep";
import { VisitFormData } from "../../../../../shared/api/visit/model/model";

export interface FilledFormData {
  mainInfo: MainInfoStepData;
  illnesses: IllnessesStepData;
}

interface CreateVisitFormStepperProps {
  visitFormData: VisitFormData;
}

export const CreateVisitFormStepper: React.FC<CreateVisitFormStepperProps> = ({
  visitFormData,
}) => {
  const [patientId, setPatientId] = useState<null | number>(null);
  const [activeStep, setActiveStep] = useState(0);

  const [filledFormData, setFilledFormData] = useState({});

  const STEPS = [
    {
      label: "Укажите основную информацию",
      component: (
        <MainInfoStep
          patientId={patientId}
          setPatientId={setPatientId}
          data={visitFormData.mainInfo}
          setActiveStep={setActiveStep}
          setFilledFormData={setFilledFormData}
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
          setFilledFormData={setFilledFormData}
        />
      ),
    },
    {
      label: "Добавьте анализы",
      component: (
        <TestsStep
          data={visitFormData.tests}
          filledFormData={filledFormData as FilledFormData}
        />
      ),
    },
  ];

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
