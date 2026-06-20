// src/components/RecentCalls.jsx

import {
  FaEllipsisV,
  FaPhoneAlt
} from "react-icons/fa";

export default function RecentCalls() {
  return (
    <div className="recent-card">

      {/* header */}
      <div className="recent-top">

        <h2>Recent Calls</h2>

        <div className="recent-dots">
          <span></span>
          <span></span>
          <span></span>
          <FaEllipsisV />
        </div>

      </div>

      {/* row 1 */}
      <div className="recent-row">

        <div className="recent-avatar avatar-1">
          👩
        </div>

        <div className="recent-info">
          <h3>Sarah Y.</h3>
          <p>Support Inquiry</p>
        </div>

        <div className="recent-menu">
          <FaEllipsisV />
        </div>

      </div>

      {/* row 2 */}
      <div className="recent-row">

        <div className="recent-avatar avatar-2">
          👨
        </div>

        <div className="recent-info">
          <h3>Ahmed R.</h3>
          <p>Follow Up</p>
        </div>

        <div className="recent-menu">
          <FaEllipsisV />
        </div>

      </div>

      {/* row 3 */}
      <div className="recent-row">

        <div className="recent-avatar avatar-3">
          <FaPhoneAlt />
        </div>

        <div className="recent-info">
          <h3>Unknown Number</h3>
          <p>Missed Call</p>
        </div>

        <div className="recent-menu">
          <FaEllipsisV />
        </div>

      </div>

    </div>
  );
}