import { Router } from "./router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import DefaultTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <RouterProvider router={Router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
