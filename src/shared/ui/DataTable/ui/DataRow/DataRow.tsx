import { TableCell, TableRow } from "@mui/material";
import React, { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type DataRowProps = {
  id: number;
  cells: string[] | ReactNode[];
};

export const DataRow: React.FC<DataRowProps> = ({ cells, id }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <TableRow
      hover
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(`${location.pathname}/${id}`)}
    >
      {cells.map((cell, index) => (
        <TableCell key={index}>{cell}</TableCell>
      ))}
    </TableRow>
  );
};
