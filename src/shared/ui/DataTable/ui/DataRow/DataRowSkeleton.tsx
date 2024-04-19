import { Skeleton, TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import React from "react";

export const DataRowSkeleton = () => {
  return (
    <TableRow>
      {[...Array(4)].map((item, index) => (
        <TableCell key={index}>
          <Skeleton />
        </TableCell>
      ))}
    </TableRow>
  );
};
