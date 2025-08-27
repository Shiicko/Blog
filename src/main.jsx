import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import GlobalStyles from "../GlobalStyles";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { ContextProvider } from "./Context/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </AuthProvider>
    <GlobalStyles />
  </StrictMode>
);
