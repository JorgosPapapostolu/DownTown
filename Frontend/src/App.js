import * as React from "react";
import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

// App imports
import Login from "./components/login/login";
import Register from "../src/components/register/register";
import Chatroom from "../src/components/videochat/Chatroom";
import ErrorPage from "../src/components/errorpage/Errorpage";
import UserDashboard from "./components/userdashboard/UserDashboard";
import AdminDashboard from "./components/master-backend/MasterDashboard";
import UserIntro from "./components/userdashboard/UserIntro";
import AppMenu from "./AppMenu";
import Welcome from "./components/landingpage/welcome";

// Auth import
import { AuthProvider, useAuth } from "./components/login/auth";

function AppRoutes() {
  const { isAuthenticated } = useAuth();
  const [userData, setUserData] = useState();

  // const user_uuid = sessionStorage.getItem("uuid");

  const ProtectedRoute = ({ isAuthenticated, redirectPath = "/login" }) => {
    if (!isAuthenticated) {
      return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
  };

  return (
    <>
      <AppMenu />
      <Routes>
        <Route path="/" element={<Welcome />} /* Landing Page */ />
        <Route
          path="/login"
          element={<Login userData={userData} setUserData={setUserData} />}
        />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/user/dashboard/:userId" element={<UserDashboard />} />
          <Route path="/user/:userId" element={<UserIntro />} />
          <Route path="/user/meeting/:groupId/:room" element={<Chatroom />} />
        </Route>

        {/* this route should be protected in the future as well - but with an admin role. */}
        <Route path="/masterdashboard/*" element={<AdminDashboard />} />

        {/* the private video chat rooms will be futher implemented in the future. On hold for now.
       <Route
          path="/user/meeting/:groupId/:room/:roomId"
          element={<Chatroom />} 
        /> */}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
