import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import MainInfoTab, { MainInfoTabProps } from "./Tabs/MainInfoTab";
import { Test } from "../../CreateArrivalForm/ui/CreateArrivalFormStepper/Steps/TestsStep";
import { IllnessesStepData } from "../../CreateArrivalForm/ui/CreateArrivalFormStepper/Steps/IllnessesStep";
import { TestsTab } from "./Tabs/TestsTab";

export type VisitTabsProps = {
  data: MainInfoTabProps["data"] & {
    tests: { test_type: { value: string }; value: number }[];
    therapies: string[];
    illnesses: IllnessesStepData;
  };
};

export const VisitTabs: React.FC<VisitTabsProps> = ({ data }) => {
  const { tests, illnesses, ...restInfo } = data;
  const mainInfo = restInfo;
  console.log(data);

  const TABS = [
    {
      label: "Общая информация",
      component: <MainInfoTab data={mainInfo} />,
    },
    { label: "Анализы", component: <TestsTab data={tests} /> },
    { label: "Заболевания", component: <></> },
    { label: "Терапии", component: <></> },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Box width={"100%"}>
      <Tabs value={currentTab} onChange={(_, value) => setCurrentTab(value)}>
        {TABS.map((tab, index) => (
          <Tab value={index} label={tab.label} key={tab.label} />
        ))}
      </Tabs>
      {TABS[currentTab].component}
    </Box>
  );
};
