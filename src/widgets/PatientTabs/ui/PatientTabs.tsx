import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { MainInfoTab } from "./Tabs/MainInfoTab";
import { VisitsTab } from "./Tabs/VisitsTab";

export const PatientTabs = () => {
  const TABS = [
    { label: "Общая информация", component: <MainInfoTab /> },
    { label: "Посещения", component: <VisitsTab /> },
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
