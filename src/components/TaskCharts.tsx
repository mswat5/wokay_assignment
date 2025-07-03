import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const TaskCharts = () => {
  const pieData = [
    { name: "Assigned", value: 20 },
    { name: "Unassigned", value: 80 },
  ];

  const barData = [
    { name: "User A", value: 7 },
    { name: "User B", value: 6 },
    { name: "User C", value: 5 },
    { name: "User D", value: 4 },
    { name: "User E", value: 3 },
  ];

  const COLORS = ["#9CA3AF", "#E5E7EB"];

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Total Tasks by Assignee
        </h3>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={60}
                paddingAngle={0}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Open Tasks by Assignee
        </h3>
        <div className="text-sm text-gray-500 mb-2">Tasks</div>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="name" hide />
              <YAxis domain={[0, 8]} />
              <Bar dataKey="value" fill="#9CA3AF" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Tasks Completed This Week
        </h3>
        <div className="flex items-center justify-center h-32">
          <div className="text-center">
            <div className="text-gray-400 text-lg mb-2">📋</div>
            <p className="text-gray-500">No Results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCharts;
