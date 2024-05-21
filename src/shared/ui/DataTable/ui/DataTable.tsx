import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { DataRow, DataRowProps } from "./DataRow/DataRow";
import { DataRowSkeleton } from "./DataRow/DataRowSkeleton";

interface DataTableProps {
  colnames: string[];
  items: DataRowProps[] | undefined;
  isLoading?: boolean;
  redirectUrl?: string;
}

export const DataTable: React.FC<DataTableProps> = ({
  items,
  isLoading = false,
  colnames,
  redirectUrl,
}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {colnames.map((colname) => (
              <TableCell key={colname}>{colname}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            [...Array(4)].map((item, index) => <DataRowSkeleton key={index} />)
          ) : items ? (
            items.map((item, index) => (
              <DataRow redirectUrl={redirectUrl} key={item.id} {...item} />
            ))
          ) : (
            <></>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
