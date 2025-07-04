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
    <div className="h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <SecondaryHeader />
          <DashboardControls />

          <main className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="h-full flex flex-col">
                <AIExecutiveSummary />
              </div>
              <div className="space-y-6">
                <TaskStatusOverview />
                <WorkloadChart />
              </div>
            </div>

            <TaskCharts />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
