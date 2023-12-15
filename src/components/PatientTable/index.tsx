import { List } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PatientRow from "./PatientRow";
import { Patient } from "../../App";

const PatientTable: React.FC<{ patients: Patient[] }> = ({ patients }) => {
  return (
    <List>
      {patients &&
        patients.map((patient, index) => (
          <PatientRow key={`patient${index}`} name={patient.patientName} />
        ))}
    </List>
  );
};

export default PatientTable;
