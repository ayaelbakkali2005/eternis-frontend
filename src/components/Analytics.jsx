// src/components/Analytics.jsx
// PIXEL PERFECT VERSION

export default function Analytics() {
  return (
    <div className="analytics-card">

      {/* header */}
      <div className="analytics-top">

        <h2>Sales Analytics</h2>

        <button className="month-select">
          This Month <span>⌄</span>
        </button>

      </div>

      {/* content */}
      <div className="analytics-grid">

        {/* LEFT SIDE */}
        <div className="graph-side">

          {/* labels */}
          <div className="price-labels">
            <span>$12k</span>
            <span>$8k</span>
            <span>$4k</span>
            <span>0</span>
          </div>

          {/* graph */}
          <svg
            className="graph-svg"
            viewBox="0 0 760 300"
          >

            {/* grid */}
            <line x1="70" y1="40" x2="720" y2="40" className="grid-line"/>
            <line x1="70" y1="110" x2="720" y2="110" className="grid-line"/>
            <line x1="70" y1="180" x2="720" y2="180" className="grid-line"/>
            <line x1="70" y1="250" x2="720" y2="250" className="grid-line"/>

            {/* bars */}
            <rect x="95"  y="205" width="30" height="45" rx="5" className="bar"/>
            <rect x="140" y="188" width="30" height="62" rx="5" className="bar"/>

            <rect x="230" y="155" width="30" height="95" rx="5" className="bar"/>
            <rect x="275" y="125" width="30" height="125" rx="5" className="bar"/>

            <rect x="365" y="192" width="30" height="58" rx="5" className="bar"/>

            <rect x="455" y="150" width="30" height="100" rx="5" className="bar"/>

            <rect x="520" y="85" width="30" height="165" rx="5" className="bar"/>

            <rect x="615" y="190" width="30" height="60" rx="5" className="bar"/>

            <rect x="665" y="145" width="30" height="105" rx="5" className="bar"/>

            {/* pink line */}
            <path
              className="sales-line"
              d="
              M70 175
              C110 120,145 138,175 128
              S240 70,290 92
              S360 118,405 70
              S485 35,535 62
              S615 105,665 78
              S710 38,720 48
              "
            />

            {/* points */}
            <circle cx="70"  cy="175" r="5" className="dot"/>
            <circle cx="175" cy="128" r="5" className="dot"/>
            <circle cx="290" cy="92" r="5" className="dot"/>
            <circle cx="405" cy="70" r="5" className="dot"/>
            <circle cx="535" cy="62" r="5" className="dot"/>
            <circle cx="665" cy="78" r="5" className="dot"/>
            <circle cx="720" cy="48" r="5" className="dot"/>

          </svg>

          {/* weeks */}
          <div className="weeks-row">
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Week 3</span>
            <span>Week 4</span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="tasks-side">

          <h3>Current Tasks</h3>

          <div className="task">
            <i className="purple"></i>
            <span>Prepare Q2 Report</span>
          </div>

          <div className="task">
            <i className="blue"></i>
            <span>Client Meeting at 3PM</span>
          </div>

          <div className="task">
            <i className="orange"></i>
            <span>Update Website Design</span>
          </div>

        </div>

      </div>

    </div>
  );
}