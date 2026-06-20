// src/components/TopClients.jsx

import {
  FaGift,
  FaLeaf,
  FaCube,
  FaEllipsisV
} from "react-icons/fa";

export default function TopClients() {
  return (
    <div className="clients-card">

      {/* header */}
      <div className="clients-top">

        <h2>Top Clients</h2>

        <div className="clients-dots">
          <span></span>
          <span></span>
          <span></span>
          <FaEllipsisV />
        </div>

      </div>

      {/* row 1 */}
      <div className="client-row">

        <div className="client-icon icon-purple">
          <FaGift />
        </div>

        <h3>Atlas Corp.</h3>

        <span>$8,500</span>

      </div>

      {/* row 2 */}
      <div className="client-row">

        <div className="client-icon icon-green">
          <FaLeaf />
        </div>

        <h3>Nova Solutions</h3>

        <span>$5,200</span>

      </div>

      {/* row 3 */}
      <div className="client-row">

        <div className="client-icon icon-mint">
          <FaCube />
        </div>

        <h3>GreenTech Ltd.</h3>

        <span>$3,400</span>

      </div>

    </div>
  );
}