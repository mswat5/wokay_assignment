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

        <div className="flex-1 ">
          <DashboardControls />

          <main className="p-6 space-y-6">
            <AIExecutiveSummary />
            <TaskStatusOverview />
            <WorkloadChart />
            <TaskCharts />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
