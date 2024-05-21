import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { MainInfoTab } from "./Tabs/MainInfoTab";
import { ArrivalsTab } from "./Tabs/ArrivalsTab";
import { useParams } from "react-router-dom";

type PatientTabsProps = {
  data: {
    nationality: { value: string };
    somatotype: { value: string };
    migration?: {
      region: { value: string };
      date: { value: string };
    };
  };
};

export const PatientTabs: React.FC<PatientTabsProps> = ({ data }) => {
  const { id } = useParams();
  console.log(data);
  const TABS = [
    { label: "Общая информация", component: <MainInfoTab data={data} /> },
    {
      label: "Поступления",
      component: <ArrivalsTab patientId={id ? parseInt(id) : undefined} />,
    },
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
