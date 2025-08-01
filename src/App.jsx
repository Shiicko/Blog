import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { LogIn } from "./components/Auth/LogIn";
import Signup from "./components/Auth/Signup";
import { Navbar } from "./components/Navbar/Navbar";
import { ErrorPage } from "./pages/Error/ErrorPage";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
