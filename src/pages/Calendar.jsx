import "./Calendar.css";
import Sidebar from "../components/Sidebar";
import {
  FaSearch,
  FaBell,
  FaPlus,
} from "react-icons/fa";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const events = [
    {
      title: "Product Demo",
      date: "2026-06-15",
    },
    {
      title: "UI/UX Workshop",
      date: "2026-06-18",
    },
    {
      title: "Team Meeting",
      date: "2026-06-22",
    },
    {
      title: "Project Deadline",
      date: "2026-06-27",
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <div className="calendar-page">
          {/* Header */}
          <div className="calendar-header">
            <div>
              <h1>Calendar</h1>
              <p>
                Manage your schedule and never miss an important event.
              </p>
            </div>

            <div className="header-actions">
              <div className="search-box">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search events..."
                />
              </div>

              <button className="notif-btn">
                <FaBell />
                <span>3</span>
              </button>

              <button className="add-btn">
                <FaPlus />
                Add Event
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="calendar-content">

            {/* Calendar */}
            <div className="calendar-card">
              <FullCalendar
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                ]}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                height="auto"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right:
                    "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                events={events}
              />
            </div>

            {/* Right Sidebar */}
            <div className="calendar-sidebar">

              {/* Weather */}
              <div className="mini-card">
                <div className="card-title">
                  <h3>Weather</h3>
                </div>

                <div className="weather-card">
                  <h2>☀️ 28°C</h2>
                  <p>Tetouan, Morocco</p>
                  <span>Sunny Day</span>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="mini-card">
                <div className="card-title">
                  <h3>Upcoming Events</h3>
                  <span>View all</span>
                </div>

                <div className="event">
                  <h4>Product Demo</h4>
                  <p>June 15, 2026</p>
                </div>

                <div className="event">
                  <h4>UI/UX Workshop</h4>
                  <p>June 18, 2026</p>
                </div>

                <div className="event">
                  <h4>Team Meeting</h4>
                  <p>June 22, 2026</p>
                </div>
              </div>

              {/* Today's Events */}
              <div className="mini-card">
                <div className="card-title">
                  <h3>Today's Events</h3>
                </div>

                <div className="event">
                  <h4>Team Meeting</h4>
                  <p>10:00 AM</p>
                </div>

                <div className="event">
                  <h4>Product Demo</h4>
                  <p>02:00 PM</p>
                </div>

                <div className="event">
                  <h4>Client Call</h4>
                  <p>05:00 PM</p>
                </div>
              </div>

              {/* Tasks */}
              <div className="mini-card">
                <div className="card-title">
                  <h3>Tasks & Deadlines</h3>
                  <span>View all</span>
                </div>

                <div className="task">
                  Prepare monthly report
                </div>

                <div className="task">
                  Review design system
                </div>

                <div className="task">
                  Update project roadmap
                </div>

                <div className="task">
                  Finish dashboard UI
                </div>
              </div>

              {/* AI Assistant */}
              <div className="mini-card ai-card">
                <h3>🤖 Eternis AI</h3>

                <p>
                  You have 3 meetings today and
                  1 deadline tomorrow.
                </p>

                <button className="ai-btn">
                  Open Assistant
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Calendar;