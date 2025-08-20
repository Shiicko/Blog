import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import GlobalStyles from "../GlobalStyles";
import { BrowserRouter } from "react-router";
import { ContextProvider } from "./Context/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
    <GlobalStyles />
  </StrictMode>
);
