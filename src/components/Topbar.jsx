// src/components/Topbar.jsx

import { useState, useEffect } from "react";

import {
  FaBell,
  FaFileAlt,
  FaChevronDown,
  FaMoon,
  FaSun
} from "react-icons/fa";

import profileImg from "../assets/profile.png";

export default function Topbar() {

  const [lightMode, setLightMode] =
    useState(false);

  /* ================= LOAD THEME ================= */

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "light") {

      document.body.classList.add(
        "light-mode"
      );

      setLightMode(true);

    }

  }, []);

  /* ================= TOGGLE THEME ================= */

  const toggleTheme = () => {

    document.body.classList.toggle(
      "light-mode"
    );

    const isLight =
      document.body.classList.contains(
        "light-mode"
      );

    setLightMode(isLight);

    localStorage.setItem(

      "theme",

      isLight
        ? "light"
        : "dark"

    );

  };

  /* ================= LOGOUT ================= */

  const handleLogout = () => {

    localStorage.removeItem(
      "isLoggedIn"
    );

    window.location.href =
      "/login";

  };

  return (

    <div className="topbar">

      {/* ================= LEFT ================= */}

      <div className="topbar-left">

        <h1>
          AI Company Dashboard
        </h1>

      </div>

      {/* ================= RIGHT ================= */}

      <div className="topbar-right">

        {/* ALERTS */}

        <div className="top-item">

          <FaBell />

          <span>
            Alerts
          </span>

        </div>

        {/* REPORTS */}

        <div className="top-item">

          <FaFileAlt />

          <span>
            Reports
          </span>

          <FaChevronDown
            className="small-icon"
          />

        </div>

        {/* DARK / LIGHT */}

        <button

          className="theme-btn"

          onClick={toggleTheme}

        >

          {lightMode
            ? <FaMoon />
            : <FaSun />
          }

        </button>

        {/* LOGOUT */}

        <button

          className="logout-btn"

          onClick={handleLogout}

        >

          Logout

        </button>

        {/* PROFILE */}

        <div className="profile-box">

          <img

            src={profileImg}

            alt="profile"

            className="profile-img"

          />

          <span>
            David
          </span>

          <FaChevronDown
            className="small-icon"
          />

        </div>

      </div>

    </div>

  );
}