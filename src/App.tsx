import Header from "./components/Header";
import SecondaryHeader from "./components/SecondaryHeader";
import Sidebar from "./components/Sidebar";
import DashboardControls from "./components/DashboardControls";
import AIExecutiveSummary from "./components/AIExecutiveSummary";
import TaskStatusOverview from "./components/TaskStatusOverview";
import WorkloadChart from "./components/WorkloadChart";
import TaskCharts from "./components/TaskCharts";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SecondaryHeader />

      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <DashboardControls />

          <main className="p-6 space-y-6">
            {/* First row: AI Executive Summary on the left, TaskStatusOverview and WorkloadChart on the right */}
            <div className="grid grid-cols-2 gap-6">
              <div className="h-full">
                <AIExecutiveSummary />
              </div>
              <div className="space-y-6">
                <TaskStatusOverview />
                <WorkloadChart />
              </div>
            </div>

            {/* Second row: TaskCharts (already spanning full width) */}
            <TaskCharts />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
