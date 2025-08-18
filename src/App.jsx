import { Route, Routes, useLocation } from "react-router";
import { Home } from "./pages/Home/Home";
import { LogIn } from "./components/Auth/LogIn";
import Signup from "./components/Auth/Signup";
import { Navbar } from "./components/Navbar/Navbar";
import { ErrorPage } from "./pages/Error/ErrorPage";
import { Bank } from "./components/CardData/Bank";

export const App = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/signup", "/bank"];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
