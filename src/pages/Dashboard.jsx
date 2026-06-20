import StatsCards from "../components/StatsCards";
import Analytics from "../components/Analytics";
import Assistant from "../components/Assistant";
import BottomSection from "../components/BottomSection";
import RecentCalls from "../components/RecentCalls";
import TopClients from "../components/TopClients";

export default function Dashboard() {
  return (
    <div className="dashboard-page">

      <StatsCards />

      <div className="dashboard-middle">

        <div className="left-zone">

          <Analytics />

          <BottomSection />

          <div className="bottom-row">
            <RecentCalls />
            <TopClients />
          </div>

        </div>

        <div className="right-zone">
          <Assistant />
        </div>

      </div>

    </div>
  );
}