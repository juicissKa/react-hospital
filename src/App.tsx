import React, { useState } from "react";
import PatientTable from "./components/PatientTable";
import AddModal from "./components/AddModalForm";
import { Button, Dialog } from "@mui/material";
import AddModalForm from "./components/AddModalForm";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Dialog open={open} onClose={() => setOpen(false)}>
        <AddModalForm />
      </Dialog>
      <Button onClick={() => setOpen(true)}>Добавить пациента</Button>
      <PatientTable />
    </div>
  );
}

export default App;
