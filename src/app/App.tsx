import { CreatePatient } from "../pages/PatientPages/CreatePatient";
import { StoreProvider } from "./providers/StoreProvider/";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <CreatePatient />
      </StoreProvider>
    </div>
  );
}

export default App;
