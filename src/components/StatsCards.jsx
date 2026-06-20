// StatsCards.jsx  (Laptop 1366px - Exact Photo)

import {
  FaUserAlt,
  FaBriefcase,
  FaPhoneAlt,
  FaChartLine
} from "react-icons/fa";

export default function StatsCards() {
  const cards = [
    {
      icon:<FaUserAlt />,
      title:"Employees",
      value:"24",
      sub:"Active",
      cls:"employee"
    },
    {
      icon:<FaBriefcase />,
      title:"Clients",
      value:"86",
      sub:"Total",
      cls:"client"
    },
    {
      icon:<FaPhoneAlt />,
      title:"Calls Today",
      value:"32",
      sub:"Calls",
      cls:"calls"
    },
    {
      icon:<FaChartLine />,
      title:"Monthly Revenue",
      value:"$15,300",
      sub:"↑",
      cls:"revenue"
    }
  ];

  return (
    <div className="stats-row">
      {cards.map((item,index)=>(
        <div className={`dash-card ${item.cls}`} key={index}>

          <div className="left-wrap">

            <div className="icon-box">
              {item.icon}
            </div>

            <div className="txt-box">
              <p>{item.title}</p>

              <div className="val-line">
                <h3>{item.value}</h3>
                <span>{item.sub}</span>
              </div>
            </div>

          </div>

          <div className="tiny-bars">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      ))}
    </div>
  );
}