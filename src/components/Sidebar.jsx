import { Link, useLocation } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaUserFriends,
  FaChartBar,
  FaCog
} from "react-icons/fa";

import logo from "../assets/eternis-logo.png";

export default function Sidebar() {

  const location = useLocation();

  return (
    <div className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <img src={logo} alt="logo" />
        <h2>Eternis</h2>
      </div>

      {/* Menu */}
      <div className="sidebar-menu">

        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "sidebar-item active"
              : "sidebar-item"
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/employees"
          className={
            location.pathname === "/employees"
              ? "sidebar-item active"
              : "sidebar-item"
          }
        >
          <FaUsers />
          <span>Employees</span>
        </Link>

        <Link
          to="/clients"
          className="sidebar-item"
        >
          <FaUserFriends />
          <span>Clients</span>
        </Link>

        <Link
          to="/reports"
          className="sidebar-item"
        >
          <FaChartBar />
          <span>Reports</span>
        </Link>

        <Link
          to="/settings"
          className="sidebar-item"
        >
          <FaCog />
          <span>Settings</span>
        </Link>

      </div>

    </div>
  );
}