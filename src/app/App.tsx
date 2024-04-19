import { StoreProvider } from "./providers/StoreProvider/";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Outlet } from "react-router-dom";
import { MainLayout } from "./layout/ui/MainLayout";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <ThemeProvider>
          <Box display={"flex"} flexDirection={"row"}>
            <MainLayout />
            <Outlet />
          </Box>
        </ThemeProvider>
      </StoreProvider>
    </div>
  );
}

export default App;
