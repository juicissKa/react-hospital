import React, { useEffect, useState } from "react";
import PatientTable from "./components/PatientTable";
import AddModal from "./components/AddModalForm";
import { Button, Dialog } from "@mui/material";
import AddModalForm from "./components/AddModalForm";
import axios from "axios";

export type Patient = {
  patientName: string;
};

function App() {
  const [open, setOpen] = useState(false);

  const [patients, setPatients] = useState<Patient[]>();
  const [isLoaded, setIsLoaded] = useState(false);

  const getPatients = async () => {
    const result = await axios.get("http://localhost:3001/patients");
    setPatients(result.data);
  };

  const postPatient = async (values: any) => {
    await axios.post("http://localhost:3001/patients", values);
    await getPatients();
  };

  useEffect(() => {
    getPatients();
  }, []);

  const onSubmit = (values: any) => {
    postPatient(values);
  };
  return (
    <div className="App">
      <Dialog open={open} onClose={() => setOpen(false)}>
        <AddModalForm {...{ onSubmit }} />
      </Dialog>
      <Button onClick={() => setOpen(true)}>Добавить пациента</Button>
      {patients && <PatientTable {...{ patients }} />}
    </div>
  );
}

export default App;
