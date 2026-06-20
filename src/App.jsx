import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyCode from "./pages/VerifyCode";
import ResetPassword from "./pages/ResetPassword";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import EmployeeProfile from "./pages/EmployeeProfile";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function DashboardLayout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <Topbar />

        <div className="page-content">
          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/employees"
              element={<Employees />}
            />

            <Route
              path="/employee/:id"
              element={<EmployeeProfile />}
            />

          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Authentication */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/verify-code"
          element={<VerifyCode />}
        />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        {/* Dashboard Layout */}

        <Route
          path="/*"
          element={<DashboardLayout />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;