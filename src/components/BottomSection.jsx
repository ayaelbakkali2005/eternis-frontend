// src/components/BottomSection.jsx
// SAME PHOTO + ICONS + ANIMATIONS

import {
  FaTimes,
  FaClock,
  FaBell,
  FaGlobe,
  FaEllipsisH
} from "react-icons/fa";

export default function BottomSection() {
  return (
    <div className="bottom-wrapper">

      <div className="tasks-overview-card">

        {/* header */}
        <div className="tasks-head">
          <h2>Tasks Overview</h2>

          <div className="menu-icons">
            <FaEllipsisH />
          </div>
        </div>

        {/* content */}
        <div className="tasks-grid">

          {/* left donut */}
          <div className="donut-side">

            <div className="donut-chart">
              <div className="donut-center">
                <h3>58%</h3>
                <p>Task</p>
              </div>
            </div>

          </div>

          {/* middle stats */}
          <div className="middle-info">

            <div className="mid-row">
              <h3>50%</h3>
              <p>Revenue</p>
              <span>12 tasks</span>
            </div>

            <div className="mid-row">
              <h3>17%</h3>
              <p>Pending</p>
              <span>4 Tasks</span>
            </div>

          </div>

          {/* right list */}
          <div className="right-list">

            <div className="task-item">
              <i className="purple"><FaTimes /></i>
              <p>In Progress</p>
              <span>12 Tasks</span>
            </div>

            <div className="task-item">
              <i className="blue"><FaClock /></i>
              <p>Pending</p>
              <span>4 Tasks</span>
            </div>

            <div className="task-item">
              <i className="orange"><FaBell /></i>
              <p>Upcoming</p>
              <span>3 Tasks</span>
            </div>

            <div className="task-item">
              <i className="gray"><FaGlobe /></i>
              <p>Update Website</p>
              <span>8 Tasks</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}