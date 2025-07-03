import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const WorkloadChart = () => {
  const data = [{ name: "Workload", gray: 85, blue: 15 }];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Workload by Status
      </h3>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" barSize={20}>
            <XAxis type="number" domain={[0, 100]} />
            <YAxis type="category" dataKey="name" width={80} />
            <Bar dataKey="gray" fill="#9CA3AF" stackId="a" />
            <Bar dataKey="blue" fill="#3B82F6" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>0</span>
        <span>Tasks</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default WorkloadChart;
