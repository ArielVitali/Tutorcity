import ServiceDetails from "./components/Item/ServiceDetails.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Containers/Home.jsx";
import Login from "./components/Auth/Login.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ServiceDetails" element={<ServiceDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
