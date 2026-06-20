import "./Signup.css";
import bg from "../assets/ai-dashboard1.jpg";
import logo from "../assets/eternis-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEyeSlash,
  FaCheckCircle
} from "react-icons/fa";

import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

function Signup() {
  const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [companyName, setCompanyName] = useState("");
const [industry, setIndustry] = useState("");
const [companySize, setCompanySize] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [role, setRole] = useState("Administrator");
const navigate = useNavigate();

const handleSignup = async () => {

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {

    const response = await fetch(
      "http://localhost:8080/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          companyName,
          industry,
          companySize,
          password,
          role,
        }),
      }
    );

   const data = await response.json();

if (data.success) {
  alert(data.message);
  navigate("/login");
} else {
  alert(data.message);
}

  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};
  return (
    <div
      className="signup-page"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="signup-card">

        {/* Logo */}

        <div className="logo-section">
          <img src={logo} alt="Eternis Logo"  className="logo-img" />
            <h2>ETERNIS</h2>

            <span>SMART WEB SOLUTIONS</span>
        </div>

        {/* Header */}

        <h1>Create your Eternis account</h1>

        <p className="subtitle">
          Join thousands of professionals managing
          their business with Eternis.
        </p>

        {/* Personal Information */}

        <div className="section-title">
          <FaUser />
          <span>Personal Information</span>
        </div>

        <div className="form-row">

          <div className="field">
            <label>First Name</label>

            <div className="input-box">
              <FaUser />
              <input
  type="text"
  placeholder="Enter your first name"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
/>
            </div>
          </div>

          <div className="field">
            <label>Last Name</label>

            <div className="input-box">
              <FaUser />
              <input
  type="text"
  placeholder="Enter your last name"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
/>
            </div>
          </div>

        </div>

        <div className="form-row">

          <div className="field">
            <label>Professional Email</label>

            <div className="input-box">
              <FaEnvelope />
              <input
  type="email"
  placeholder="Enter your professional email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
            </div>
          </div>

          <div className="field">
            <label>Phone Number</label>

            <div className="input-box">
              <FaPhone />
          <input
  type="text"
  placeholder="Enter your phone number"
  value={phoneNumber}
  onChange={(e) => setPhoneNumber(e.target.value)}
/>
            </div>
          </div>

        </div>

        {/* Company Information */}

        <div className="section-title">
          <HiOutlineOfficeBuilding />
          <span>Company Information</span>
        </div>

        <div className="form-row">

          <div className="field">
            <label>Company Name</label>

            <div className="input-box">
              <MdOutlineBusinessCenter />
           <input
  type="text"
  placeholder="Enter your company name"
  value={companyName}
  onChange={(e) => setCompanyName(e.target.value)}
/>
            </div>
          </div>

          <div className="field">
            <label>Industry</label>

            <div className="input-box">
          <select
  value={industry}
  onChange={(e) => setIndustry(e.target.value)}
>
  <option value="">Select your industry</option>
  <option value="Technology">Technology</option>
  <option value="Finance">Finance</option>
  <option value="Education">Education</option>
  <option value="Healthcare">Healthcare</option>
</select>
            </div>
          </div>

        </div>

   <div className="field full-width">
  <label>Company Size</label>

  <div className="input-box">
    <select
      value={companySize}
      onChange={(e) => setCompanySize(e.target.value)}
    >
      <option value="">Select company size</option>
      <option value="1-10 Employees">1 - 10 Employees</option>
      <option value="11-50 Employees">11 - 50 Employees</option>
      <option value="51-100 Employees">51 - 100 Employees</option>
      <option value="100+ Employees">100+ Employees</option>
    </select>
  </div>
</div>
        {/* Account Security */}

        <div className="section-title">
          <FaLock />
          <span>Account Security</span>
        </div>

        <div className="form-row">

          <div className="field">
            <label>Password</label>

            <div className="input-box">
              <FaLock />

            <input
  type="password"
  placeholder="Create a strong password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
              <FaEyeSlash />
            </div>
          </div>

          <div className="field">
            <label>Confirm Password</label>

            <div className="input-box">
              <FaLock />
<input
  type="password"
  placeholder="Confirm your password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
/>

              <FaEyeSlash />
            </div>
          </div>

        </div>

        {/* Role */}

        <div className="section-title">
          <FaUser />
          <span>Your Role</span>
        </div>

        <div className="role-container">

          <div className="role-card active">

            <div className="role-header">
              <BsPersonWorkspace />
              <FaCheckCircle className="check" />
            </div>

            <h4>Administrator</h4>

            <p>
              Full access and control
              over the platform
            </p>

          </div>

          <div className="role-card">

            <div className="role-header">
              <MdOutlineBusinessCenter />
            </div>

            <h4>Project Manager</h4>

            <p>
              Manage projects and
              team members
            </p>

          </div>

          <div className="role-card">

            <div className="role-header">
              <FaUser />
            </div>

            <h4>Team Member</h4>

            <p>
              Collaborate and
              contribute to projects
            </p>

          </div>

        </div>

        {/* Terms */}

        <div className="terms">

          <input type="checkbox" />

          <span>
            I agree to the
            <a href="/"> Terms of Service </a>
            and
            <a href="/"> Privacy Policy</a>
          </span>

        </div>

        {/* Button */}
<button
  className="create-btn"
  onClick={handleSignup}
>
  Create Workspace →
</button>

        {/* Login */}

        <p className="login-link">
          Already have an account?
          <a href="/login"> Log In</a>
        </p>

      </div>
    </div>
  );
  }

export default Signup;