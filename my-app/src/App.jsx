import ServiceDetails from "./pages/ServiceDetails/index.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Login/index.jsx";
import SignUp from "./pages/Signup/index.jsx";
import ForgotPassword from "./pages/ForgotPassword/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HireServiceForm from "./pages/HireService/index.jsx";
import ProviderHome from "./pages/HomeProvider/index.jsx";
import { AuthProvider } from "./context/AuthContextProvider/AuthContext.jsx";
import { Menus } from "./components/NavBar/SideMenu.jsx";
import CommentsInbox from "./pages/PendingComments/index.jsx";
import HiringsHome from "./pages/Hirings/index.jsx";

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
          <Route path="/CommentsInbox" element={<CommentsInbox />} />
          <Route path="/Hirings" element={<HiringsHome />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
