import ServiceDetails from "./components/Item/ServiceDetails.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Containers/Home.jsx";
import Login from "./components/Auth/Login.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HireServiceForm from "./components/Forms/HireServiceForm.jsx";
import ProviderHome from "./components/ProviderContainers/ProviderHome.jsx";
import { AuthProvider } from "./js/AuthContextProvider/AuthContext.jsx";
import { Menus } from "./components/ProviderContainers/ProviderHome.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar menus={Menus} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ServiceDetails" element={<ServiceDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/hireService" element={<HireServiceForm />} />
          <Route path="/ProviderHome" element={<ProviderHome />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
