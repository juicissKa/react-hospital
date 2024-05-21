import { AssignmentReturned, Person } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const buttons = [
  {
    text: "Поступления",
    icon: <AssignmentReturned sx={{ color: "primary.main" }} />,
    route: "/arrivals",
  },
  {
    text: "Пациенты",
    icon: <Person sx={{ color: "primary.main" }} />,
    route: "/patients",
  },
];

export const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <Box
      position={"fixed"}
      width={"200px"}
      bgcolor={"primary.light"}
      height={"100vh"}
    >
      <List>
        {buttons.map((button) => (
          <ListItem key={button.text}>
            <ListItemButton onClick={() => navigate(button.route)}>
              {button.icon && (
                <ListItemIcon sx={{ minWidth: 36 }}>{button.icon}</ListItemIcon>
              )}
              <ListItemText
                primary={
                  <Typography color={"primary.main"}>{button.text}</Typography>
                }
                disableTypography
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
