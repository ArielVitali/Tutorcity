import ServiceDetails from "./pages/ServiceDetails/index.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Login/index.jsx";
import SignUp from "./pages/Signup/index.jsx";
import ForgotPassword from "./pages/ForgotPassword/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HireServiceForm from "./pages/HireService/index.jsx";
import ProviderHome from "./pages/HomeProvider/index.jsx";
import { UserProvider } from "./context/UserContext/UserContext.jsx";
import { Menus } from "./components/NavBar/SideMenu.jsx";
import CommentsInbox from "./pages/PendingComments/index.jsx";
import HiringsHome from "./pages/Hirings/index.jsx";
import NewService from "./pages/NewService/index.jsx";

import { PrivateUserRoutes } from "./utils/Routes/PrivateUserRoutes.jsx";
// import Profile from "./pages/Profile/index.jsx";

function App() {
  return (
    <UserProvider>
      <NavBar menus={Menus} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        {/* <Route
            path="/request-reset-password"
            element={<RequestForgotPassword />}
          /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hireService" element={<HireServiceForm />} />
        <Route element={<PrivateUserRoutes />}>
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/ProviderHome" element={<ProviderHome />} />
          <Route path="/new-service" element={<NewService />} />
          <Route path="/service-admin-details" element={<ServiceDetails />} />
          <Route path="/CommentsInbox" element={<CommentsInbox />} />
          <Route path="/Hirings" element={<HiringsHome />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
