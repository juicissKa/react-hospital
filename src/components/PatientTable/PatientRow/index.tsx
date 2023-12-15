import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

const PatientRow: React.FC<{ name: string }> = ({ name }) => {
  return (
    <ListItem alignItems="flex-start" sx={{ padding: 0 }}>
      <ListItemButton>
        <ListItemText>{name}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default PatientRow;
