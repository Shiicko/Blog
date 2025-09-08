import { Route, Routes, useLocation, Navigate } from "react-router";
import { Home } from "./pages/Home/Home";
import { LogIn } from "./components/Auth/LogIn";
import Signup from "./components/Auth/Signup";
import { Navbar } from "./components/Navbar/Navbar";
import { ErrorPage } from "./pages/Error/ErrorPage";
import { Bank } from "./components/CardData/Bank";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { Profile } from "./pages/Profile/Profile";

export const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup", "/bank"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);
  const { user } = useContext(AuthContext);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LogIn />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="/bank" element={<Bank />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
