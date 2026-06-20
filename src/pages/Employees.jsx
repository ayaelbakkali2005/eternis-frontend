import "./Employees.css";
import { useEffect, useState } from "react";


import {
  FaSearch,
  FaPlus,
  FaUsers,
  FaUserCheck,
  FaClock,
  FaUserTimes
} from "react-icons/fa";

export default function Employees() {

  /* ================= STATES ================= */

  const [employees, setEmployees] = useState([]);

  const [search, setSearch] = useState("");

  const [departmentFilter, setDepartmentFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  const employeesPerPage = 5;

  /* ================= MODAL ================= */

  const [showModal, setShowModal] =
    useState(false);

  const [editingEmployee, setEditingEmployee] =
    useState(null);

  const [newEmployee, setNewEmployee] =
    useState({

      firstName:"",
      lastName:"",
      email:"",
      position:"",
      department:"",
      active:true,
      image:""

    });

  /* ================= FETCH ================= */

  useEffect(() => {

    fetch("http://localhost:8080/api/employees")

      .then((res) => res.json())

      .then((data) => setEmployees(data))

      .catch((error) => console.log(error));

  }, []);

  /* ================= LIGHT MODE ================= */

  useEffect(() => {

    document.body.classList.add("light-mode");

    return () => {
      document.body.classList.remove("light-mode");
    };

  }, []);

  /* ================= ADD EMPLOYEE ================= */

  const handleAddEmployee = async () => {

    const employeeToAdd = {

      ...newEmployee,

      joinDate:new Date(),

      active:true

    };

    try{

      const response = await fetch(

        "http://localhost:8080/api/employees",

        {

          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify(employeeToAdd)

        }

      );

      const savedEmployee =
        await response.json();

      setEmployees([
        savedEmployee,
        ...employees
      ]);

      setShowModal(false);

      resetForm();

    }catch(error){

      console.log(error);

    }

  };

  /* ================= UPDATE ================= */

  const handleUpdateEmployee = async () => {

    try{

      const response = await fetch(

        `http://localhost:8080/api/employees/${editingEmployee.id}`,

        {

          method:"PUT",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify(newEmployee)

        }

      );

      const updatedEmployee =
        await response.json();

      setEmployees(

        employees.map((emp) =>

          emp.id === updatedEmployee.id
            ? updatedEmployee
            : emp

        )

      );

      setEditingEmployee(null);

      setShowModal(false);

      resetForm();

    }catch(error){

      console.log(error);

    }

  };

  /* ================= DELETE ================= */

  const handleDeleteEmployee =
    async (id) => {

      try{

        await fetch(

          `http://localhost:8080/api/employees/${id}`,

          {
            method:"DELETE"
          }

        );

        setEmployees(

          employees.filter(
            (emp) => emp.id !== id
          )

        );

      }catch(error){

        console.log(error);

      }

    };

  /* ================= RESET ================= */

  const resetForm = () => {

    setNewEmployee({

      firstName:"",
      lastName:"",
      email:"",
      position:"",
      department:"",
      active:true,
      image:""

    });

  };

  /* ================= EDIT ================= */

  const handleEditClick = (emp) => {

    setEditingEmployee(emp);

    setNewEmployee(emp);

    setShowModal(true);

  };

  /* ================= FILTER ================= */

  const filteredEmployees =
    employees.filter((emp) => {

      const fullName =
        `${emp.firstName} ${emp.lastName}`
        .toLowerCase();

      const matchesSearch =

        fullName.includes(
          search.toLowerCase()
        ) ||

        emp.email
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        emp.department
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        emp.position
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesDepartment =

        departmentFilter === "All" ||

        emp.department === departmentFilter;

      const matchesStatus =

        statusFilter === "All" ||

        (statusFilter === "Active" &&
          emp.active) ||

        (statusFilter === "Inactive" &&
          !emp.active);

      return (

        matchesSearch &&
        matchesDepartment &&
        matchesStatus

      );
    });

  /* ================= PAGINATION ================= */

  const indexOfLastEmployee =
    currentPage * employeesPerPage;

  const indexOfFirstEmployee =
    indexOfLastEmployee - employeesPerPage;

  const currentEmployees =
    filteredEmployees.slice(
      indexOfFirstEmployee,
      indexOfLastEmployee
    );

  const totalPages =
    Math.ceil(
      filteredEmployees.length /
      employeesPerPage
    );

  /* ================= STATS ================= */

  const totalEmployees =
    employees.length;

  const activeEmployees =
    employees.filter(
      (emp) => emp.active
    ).length;

  const inactiveEmployees =
    employees.filter(
      (emp) => !emp.active
    ).length;

  return (

    <div className="employees-page">

      {/* ================= HEADER ================= */}

      <div className="employees-header">

        <h2>
          Employees Overview
        </h2>

        <div className="employees-actions">

          {/* SEARCH */}
          <div className="employee-search">

            <input
              type="text"

              placeholder="Search employee..."

              value={search}

              onChange={(e) => {

                setSearch(
                  e.target.value
                );

                setCurrentPage(1);

              }}
            />

            <FaSearch />

          </div>

          {/* DEPARTMENT */}
          <select

            value={departmentFilter}

            onChange={(e) => {

              setDepartmentFilter(
                e.target.value
              );

              setCurrentPage(1);

            }}
          >

            <option value="All">
              All Departments
            </option>

            <option value="IT">
              IT
            </option>

            <option value="HR">
              HR
            </option>

            <option value="Finance">
              Finance
            </option>

            <option value="Marketing">
              Marketing
            </option>

          </select>

          {/* STATUS */}
          <select

            value={statusFilter}

            onChange={(e) => {

              setStatusFilter(
                e.target.value
              );

              setCurrentPage(1);

            }}
          >

            <option value="All">
              All Status
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>

          </select>

          {/* BUTTON */}
          <button

            className="add-btn"

            onClick={() => {

              setEditingEmployee(null);

              resetForm();

              setShowModal(true);

            }}

          >

            <FaPlus />

            Add Employee

          </button>

        </div>

      </div>

      {/* ================= STATS ================= */}

      <div className="employees-stats">

        <div className="emp-box">
          <div className="icon-circle blue">
            <FaUsers />
          </div>

          <div className="emp-content">
            <p>Total Employees</p>
            <h1>{totalEmployees}</h1>
            <span>All employees</span>
          </div>
        </div>

        <div className="emp-box">
          <div className="icon-circle green">
            <FaUserCheck />
          </div>

          <div className="emp-content">
            <p>Active Employees</p>
            <h1>{activeEmployees}</h1>
            <span>Currently active</span>
          </div>
        </div>

        <div className="emp-box">
          <div className="icon-circle orange">
            <FaClock />
          </div>

          <div className="emp-content">
            <p>On Leave</p>
            <h1>0</h1>
            <span>On leave</span>
          </div>
        </div>

        <div className="emp-box">
          <div className="icon-circle pink">
            <FaUserTimes />
          </div>

          <div className="emp-content">
            <p>Inactive</p>
            <h1>{inactiveEmployees}</h1>
            <span>Not active</span>
          </div>
        </div>

      </div>

      {/* ================= MAIN ================= */}

      <div className="employees-main-layout">

        {/* LEFT */}
        <div className="employees-left">

          <div className="employees-table-box">

            <table className="employees-table">

              <thead>

                <tr>

                  <th>Employee</th>
                  <th>Position</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Actions</th>

                </tr>

              </thead>

             <tbody>

  {currentEmployees.map((emp) => (

    <tr

      key={emp.id}

      onClick={() =>
        window.location.href =
        `/employee/${emp.id}`
      }

      style={{
        cursor:"pointer"
      }}
    >

      {/* EMPLOYEE */}

      <td>

        <div className="employee-user">

          <img
            src={
              emp.image
                ? emp.image
                : "/avatars/1.jpg"
            }
            alt=""
          />

          <div>

            <h4>

              {emp.firstName}
              {" "}
              {emp.lastName}

            </h4>

            <span>
              {emp.email}
            </span>

          </div>

        </div>

      </td>

      {/* POSITION */}

      <td>
        {emp.position}
      </td>

      {/* DEPARTMENT */}

      <td>
        {emp.department}
      </td>

      {/* STATUS */}

      <td>

        <span

          className={
            emp.active
              ? "status active"
              : "status leave"
          }

        >

          ●

          {" "}

          {emp.active
            ? "Active"
            : "Inactive"}

        </span>

      </td>

      {/* ACTIONS */}

      <td>

        {/* EDIT */}

        <button

          className="edit-btn"

          onClick={(e) => {

            e.stopPropagation();

            handleEditClick(emp);

          }}

        >

          ✏

        </button>

        {/* DELETE */}

        <button

          className="delete-btn"

          onClick={(e) => {

            e.stopPropagation();

            handleDeleteEmployee(
              emp.id
            );

          }}

        >

          🗑

        </button>

      </td>

    </tr>

  ))}

</tbody>

            </table>

          </div>

        </div>

        {/* RIGHT */}
        <div className="employees-right">

          {/* PERFORMANCE */}
          <div className="side-card">

            <div className="side-card-header">

              <h3>
                Employee Performance
              </h3>

              <span>•••</span>

            </div>

            <div className="performance-box">

              <div className="circle-chart">

                <div className="circle-center">

                  <h1>85%</h1>

                  <p>Average</p>

                </div>

              </div>

            </div>

          </div>

          {/* NEW JOINERS */}
          <div className="side-card">

            <div className="side-card-header">

              <h3>New Joiners</h3>

            </div>

            {employees.slice(0,3).map((emp) => (

              <div
                className="joiner-item"
                key={emp.id}
              >

                <div className="joiner-left">

                  <img
                    src={
                      emp.image
                        ? emp.image
                        : "/avatars/1.jpg"
                    }
                    alt=""
                  />

                  <div>

                    <h4>
                      {emp.firstName}
                      {" "}
                      {emp.lastName}
                    </h4>

                    <p>
                      {emp.position}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* QUICK ACTIONS */}
          <div className="side-card">

            <div className="side-card-header">

              <h3>Quick Actions</h3>

            </div>

            <div className="action-item purple">
              👥 Add New Employee
            </div>

            <div className="action-item blue">
              📄 Generate Report
            </div>

            <div className="action-item green">
              📥 Export List
            </div>

          </div>

        </div>

      </div>

      {/* ================= MODAL ================= */}

      {showModal && (

        <div className="modal-overlay">

          <div className="employee-modal">

            <h2>

              {editingEmployee
                ? "Edit Employee"
                : "Add Employee"}

            </h2>

            <input
              type="text"
              placeholder="First Name"

              value={newEmployee.firstName}

              onChange={(e) =>
                setNewEmployee({

                  ...newEmployee,

                  firstName:
                    e.target.value

                })
              }
            />

            <input
              type="text"
              placeholder="Last Name"

              value={newEmployee.lastName}

              onChange={(e) =>
                setNewEmployee({

                  ...newEmployee,

                  lastName:
                    e.target.value

                })
              }
            />

            <input
              type="email"
              placeholder="Email"

              value={newEmployee.email}

              onChange={(e) =>
                setNewEmployee({

                  ...newEmployee,

                  email:
                    e.target.value

                })
              }
            />

            <input
              type="text"
              placeholder="Position"

              value={newEmployee.position}

              onChange={(e) =>
                setNewEmployee({

                  ...newEmployee,

                  position:
                    e.target.value

                })
              }
            />

            <input
              type="text"
              placeholder="Department"

              value={newEmployee.department}

              onChange={(e) =>
                setNewEmployee({

                  ...newEmployee,

                  department:
                    e.target.value

                })
              }
            />

            {/* IMAGE */}
            <div className="upload-box">

              <label className="upload-label">
                📷 Upload Image
              </label>

              <input
                type="file"
                accept="image/*"

                onChange={(e) => {

                  const file =
                    e.target.files[0];

                  if (file) {

                    const reader =
                      new FileReader();

                    reader.onloadend = () => {

                      setNewEmployee({

                        ...newEmployee,

                        image: reader.result

                      });

                    };

                    reader.readAsDataURL(file);

                  }

                }}
              />

            </div>

            {/* PREVIEW */}
            {newEmployee.image && (

              <div className="image-preview">

                <img
                  src={newEmployee.image}
                  alt=""
                />

              </div>

            )}

            <div className="modal-actions">

              <button

                className="save-btn"

                onClick={

                  editingEmployee
                    ? handleUpdateEmployee
                    : handleAddEmployee

                }

              >
                {editingEmployee
                  ? "Update"
                  : "Save"}
              </button>

              <button

                className="cancel-btn"

                onClick={() => {

                  setShowModal(false);

                  setEditingEmployee(null);

                  resetForm();

                }}

              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  
  );
}