import { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  LineChart, Line, AreaChart, Area,
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import "./Reports.css";

// ── Data ──────────────────────────────────────────────────────
const revenueData = [
  { month: "Jan", revenue: 18000, expenses: 9000 },
  { month: "Feb", revenue: 22000, expenses: 11000 },
  { month: "Mar", revenue: 19000, expenses: 10000 },
  { month: "Apr", revenue: 27000, expenses: 13000 },
  { month: "May", revenue: 48750, expenses: 21540 },
  { month: "Jun", revenue: 38000, expenses: 16000 },
];

const incomeExpenseData = [
  { month: "Jan", income: 18000, expenses: 9000 },
  { month: "Feb", income: 22000, expenses: 11000 },
  { month: "Mar", income: 35000, expenses: 19000 },
  { month: "Apr", income: 28000, expenses: 15000 },
  { month: "May", income: 45000, expenses: 22000 },
  { month: "Jun", income: 38000, expenses: 18000 },
];

const miniTrend = [4, 6, 5, 8, 7, 9, 8, 11, 10, 13];
const miniTrendDown = [12, 10, 11, 9, 10, 8, 9, 7, 8, 6];

const employees = [
  { rank: 1, name: "Sarah Johnson", role: "UI/UX Designer", score: 92, avatar: "https://i.pravatar.cc/36?img=47" },
  { rank: 2, name: "Michael Brown", role: "Full Stack Developer", score: 88, avatar: "https://i.pravatar.cc/36?img=11" },
  { rank: 3, name: "Emily Wilson", role: "Project Manager", score: 75, avatar: "https://i.pravatar.cc/36?img=5" },
  { rank: 4, name: "David Lee", role: "AI Engineer", score: 72, avatar: "https://i.pravatar.cc/36?img=15" },
  { rank: 5, name: "Jessica Taylor", role: "Marketing Specialist", score: 68, avatar: "https://i.pravatar.cc/36?img=9" },
];

const aiCallsData = [
  { name: "Answered", value: 210, pct: "65.6%", color: "#7c3aed" },
  { name: "Missed", value: 70, pct: "21.9%", color: "#3b82f6" },
  { name: "Voicemail", value: 40, pct: "12.5%", color: "#06b6d4" },
];

const projectData = [
  { name: "In Progress", value: 18, pct: "37.5%", color: "#3b82f6" },
  { name: "Completed", value: 15, pct: "31.3%", color: "#10b981" },
  { name: "On Hold", value: 8, pct: "16.7%", color: "#f59e0b" },
  { name: "Overdue", value: 7, pct: "14.5%", color: "#ef4444" },
];

const recentReports = [
  { icon: "📊", name: "Monthly Financial Report", type: "Finance", date: "May 31, 2024", color: "#7c3aed" },
  { icon: "📈", name: "Employee Performance Report", type: "HR", date: "May 30, 2024", color: "#3b82f6" },
  { icon: "📋", name: "Project Status Report", type: "Projects", date: "May 29, 2024", color: "#10b981" },
  { icon: "📞", name: "AI Calls Summary", type: "Analytics", date: "May 28, 2024", color: "#7c3aed" },
];

// ── Mini sparkline ────────────────────────────────────────────
function Sparkline({ data, color }) {
  const pts = data.map((v, i) => ({
    i, v,
  }));
  return (
    <ResponsiveContainer width="100%" height={48}>
      <AreaChart data={pts} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={`sg${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.25} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="v" stroke={color} strokeWidth={1.8}
          fill={`url(#sg${color.replace("#", "")})`} dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// ── KPI Card ──────────────────────────────────────────────────
function KpiCard({ icon, label, value, change, up, trend }) {
  return (
    <div className="rp-kpi-card">
      <div className="rp-kpi-top">
        <span className="rp-kpi-icon">{icon}</span>
        <span className="rp-kpi-label">{label}</span>
      </div>
      <div className="rp-kpi-value">{value}</div>
      <div className={`rp-kpi-change ${up ? "up" : "down"}`}>
        {up ? "▲" : "▼"} {change} <span>vs Apr 2024</span>
      </div>
      <div className="rp-kpi-spark">
        <Sparkline data={trend} color={up ? "#7c3aed" : "#3b82f6"} />
      </div>
    </div>
  );
}

// ── Custom Tooltip ────────────────────────────────────────────
function RevTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rp-tooltip">
      <div className="rp-tooltip-title">{label} 2024</div>
      {payload.map((p) => (
        <div key={p.name} className="rp-tooltip-row">
          <span style={{ color: p.color }}>●</span>
          {p.name.charAt(0).toUpperCase() + p.name.slice(1)}:&nbsp;
          <strong>${p.value.toLocaleString()}</strong>
        </div>
      ))}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────
export default function Reports() {
  const [revPeriod, setRevPeriod] = useState("Monthly");
  const [incomePeriod, setIncomePeriod] = useState("Monthly");
  const [aiPeriod, setAiPeriod] = useState("This Month");

  
   return (
  <div className="dashboard">
    <Sidebar />

    <main className="main-content">
      <div className="rp-root">
      {/* Header */}
      <div className="rp-header">
        <div>
          <h1 className="rp-title">Reports</h1>
          <p className="rp-subtitle">Track performance and analyze your business insights.</p>
        </div>
        <div className="rp-header-actions">
          <button className="rp-btn-date">
            <span>📅</span> May 1, 2024 – May 31, 2024 <span className="rp-chevron">▾</span>
          </button>
          <button className="rp-btn-ghost">
            <span>⬇</span> Export Report
          </button>
          <button className="rp-btn-primary">
            <span>📊</span> Generate Report
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="rp-kpi-row">
        <KpiCard icon="💲" label="Total Revenue" value="$48,750" change="24.5%" up trend={miniTrend} />
        <KpiCard icon="💳" label="Total Expenses" value="$21,540" change="8.2%" up={false} trend={miniTrendDown} />
        <KpiCard icon="📈" label="Net Profit" value="$27,210" change="31.7%" up trend={miniTrend} />
        <KpiCard icon="👥" label="New Clients" value="128" change="18.6%" up trend={miniTrend} />
        <KpiCard icon="✅" label="Projects Completed" value="24" change="26.3%" up trend={miniTrend} />
      </div>

      {/* Middle Row */}
      <div className="rp-mid-row">
        {/* Revenue Overview */}
        <div className="rp-card rp-revenue">
          <div className="rp-card-header">
            <span className="rp-card-title">Revenue Overview</span>
            <select value={revPeriod} onChange={e => setRevPeriod(e.target.value)} className="rp-select">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Yearly</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={230}>
            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="gRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gExp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fill: "#6b6b8a", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6b6b8a", fontSize: 11 }} axisLine={false} tickLine={false}
                tickFormatter={v => `${v / 1000}K`} />
              <Tooltip content={<RevTooltip />} />
              <Legend iconType="circle" iconSize={8}
                formatter={v => <span style={{ color: "#8888aa", fontSize: 12 }}>{v.charAt(0).toUpperCase() + v.slice(1)}</span>} />
              <Area type="monotone" dataKey="revenue" stroke="#7c3aed" strokeWidth={2}
                fill="url(#gRev)" dot={false} activeDot={{ r: 4, fill: "#7c3aed" }} />
              <Area type="monotone" dataKey="expenses" stroke="#3b82f6" strokeWidth={2}
                fill="url(#gExp)" dot={false} activeDot={{ r: 4, fill: "#3b82f6" }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Employee Performance */}
        <div className="rp-card rp-employees">
          <div className="rp-card-header">
            <span className="rp-card-title">Employee Performance</span>
            <button className="rp-link">View all</button>
          </div>
          <div className="rp-emp-list">
            {employees.map(emp => (
              <div key={emp.rank} className="rp-emp-row">
                <span className="rp-emp-rank">{emp.rank}</span>
                <img src={emp.avatar} className="rp-emp-avatar" alt={emp.name} />
                <div className="rp-emp-info">
                  <span className="rp-emp-name">{emp.name}</span>
                  <span className="rp-emp-role">{emp.role}</span>
                </div>
                <div className="rp-emp-score-col">
                  <span className="rp-emp-score">{emp.score}%</span>
                  <div className="rp-emp-bar-bg">
                    <div className="rp-emp-bar-fill" style={{ width: `${emp.score}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Calls Analytics */}
        <div className="rp-card rp-aicalls">
          <div className="rp-card-header">
            <span className="rp-card-title">AI Calls Analytics</span>
            <select value={aiPeriod} onChange={e => setAiPeriod(e.target.value)} className="rp-select">
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>
          <div className="rp-donut-wrapper">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie data={aiCallsData} cx="50%" cy="50%" innerRadius={55} outerRadius={82}
                  dataKey="value" strokeWidth={0}>
                  {aiCallsData.map((d, i) => <Cell key={i} fill={d.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="rp-donut-center">
              <span className="rp-donut-label">Total Calls</span>
              <span className="rp-donut-value">320</span>
            </div>
          </div>
          <div className="rp-aicalls-legend">
            {aiCallsData.map(d => (
              <div key={d.name} className="rp-legend-row">
                <span className="rp-legend-dot" style={{ background: d.color }} />
                <span className="rp-legend-name">{d.name}</span>
                <span className="rp-legend-val">{d.value} <span className="rp-legend-pct">({d.pct})</span></span>
              </div>
            ))}
          </div>
          <div className="rp-aicalls-change up">▲ 15.4% <span>vs Apr 2024</span></div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="rp-bot-row">
        {/* Project Statistics */}
        <div className="rp-card rp-projects">
          <div className="rp-card-header">
            <span className="rp-card-title">Project Statistics</span>
            <select className="rp-select"><option>This Month</option></select>
          </div>
          <div className="rp-proj-body">
            <div className="rp-donut-wrapper" style={{ position: "relative" }}>
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie data={projectData} cx="50%" cy="50%" innerRadius={48} outerRadius={74}
                    dataKey="value" strokeWidth={0}>
                    {projectData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="rp-donut-center">
                <span className="rp-donut-label">Total</span>
                <span className="rp-donut-value">48</span>
              </div>
            </div>
            <div className="rp-proj-legend">
              {projectData.map(d => (
                <div key={d.name} className="rp-legend-row">
                  <span className="rp-legend-dot" style={{ background: d.color }} />
                  <span className="rp-legend-name">{d.name}</span>
                  <span className="rp-legend-val">{d.value} <span className="rp-legend-pct">({d.pct})</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Income vs Expenses */}
        <div className="rp-card rp-income">
          <div className="rp-card-header">
            <span className="rp-card-title">Income vs Expenses</span>
            <select value={incomePeriod} onChange={e => setIncomePeriod(e.target.value)} className="rp-select">
              <option>Monthly</option>
              <option>Weekly</option>
            </select>
          </div>
          <div className="rp-income-legend">
            <span><span className="rp-legend-dot" style={{ background: "#7c3aed" }} />Income</span>
            <span><span className="rp-legend-dot" style={{ background: "#3b82f6" }} />Expenses</span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={incomeExpenseData} barGap={4} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
              <XAxis dataKey="month" tick={{ fill: "#6b6b8a", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6b6b8a", fontSize: 11 }} axisLine={false} tickLine={false}
                tickFormatter={v => `${v / 1000}K`} />
              <Tooltip
                contentStyle={{ background: "#1a1a2e", border: "1px solid #2a2a40", borderRadius: 8, fontSize: 12 }}
                labelStyle={{ color: "#aaa" }}
                cursor={{ fill: "#ffffff08" }}
              />
              <Bar dataKey="income" fill="#7c3aed" radius={[4, 4, 0, 0]} maxBarSize={22} />
              <Bar dataKey="expenses" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={22} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Reports */}
        <div className="rp-card rp-recent">
          <div className="rp-card-header">
            <span className="rp-card-title">Recent Reports</span>
            <button className="rp-link">View all</button>
          </div>
          <table className="rp-table">
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map(r => (
                <tr key={r.name}>
                  <td>
                    <div className="rp-report-name-cell">
                      <span className="rp-report-icon" style={{ background: r.color + "22", color: r.color }}>{r.icon}</span>
                      {r.name}
                    </div>
                  </td>
                  <td><span className="rp-type-badge">{r.type}</span></td>
                  <td className="rp-date-cell">{r.date}</td>
                  <td><button className="rp-download-btn" title="Download">⬇</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
          </div>
    </main>
  </div>
);
}