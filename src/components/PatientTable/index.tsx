import { List } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PatientRow from "./PatientRow";

type Patient = {
  patientName: string;
};

const PatientTable = () => {
  const [patients, setPatients] = useState<Patient[]>();
  const [isLoaded, setIsLoaded] = useState(false);

  const getPatients = async () => {
    const result = await axios.get("http://localhost:3001/patients");
    setPatients(result.data);
  };

  useEffect(() => {
    getPatients();
  }, []);

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
