import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import { motion } from "framer-motion";

const TaskCharts = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [selectedChart, setSelectedChart] = useState<string | null>(null);

  const pieData = [
    { name: "Assigned", value: 65, color: "#10B981" },
    { name: "Unassigned", value: 35, color: "#9CA3AF" },
  ];

  const barData = [
    { name: "Alice", value: 8, avatar: "👩‍💼" },
    { name: "Bob", value: 6, avatar: "👨‍💻" },
    { name: "Carol", value: 5, avatar: "👩‍🎨" },
    { name: "David", value: 4, avatar: "👨‍🔬" },
    { name: "Emma", value: 3, avatar: "👩‍🚀" },
  ];

  const weeklyData = [
    { day: "Mon", completed: 12, pending: 3 },
    { day: "Tue", completed: 15, pending: 5 },
    { day: "Wed", completed: 8, pending: 7 },
    { day: "Thu", completed: 18, pending: 2 },
    { day: "Fri", completed: 22, pending: 4 },
    { day: "Sat", completed: 5, pending: 1 },
    { day: "Sun", completed: 3, pending: 0 },
  ];

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(-1);
  };

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; payload: Record<string, unknown> }>; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium">{`${label}: ${payload[0].value} tasks`}</p>
        </div>
      );
    }
    return null;
  };

  const PieTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number }> }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Pie Chart */}
      <motion.div 
        whileHover={{ y: -2 }}
        className={`bg-white rounded-lg border border-gray-200 p-6 transition-all duration-200 hover:shadow-md cursor-pointer ${
          selectedChart === 'pie' ? 'ring-2 ring-teal-500' : ''
        }`}
        onClick={() => setSelectedChart(selectedChart === 'pie' ? null : 'pie')}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Total Tasks by Assignee
        </h3>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              >
                {pieData.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={entry.color}
                    stroke={activeIndex === pieData.indexOf(entry) ? "#374151" : "none"}
                    strokeWidth={activeIndex === pieData.indexOf(entry) ? 2 : 0}
                  />
                ))}
              </Pie>
              <Tooltip content={<PieTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center space-x-4 mt-3">
          {pieData.map((entry) => (
            <div key={entry.name} className="flex items-center text-sm">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-gray-600">{entry.name} ({entry.value}%)</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bar Chart */}
      <motion.div 
        whileHover={{ y: -2 }}
        className={`bg-white rounded-lg border border-gray-200 p-6 transition-all duration-200 hover:shadow-md cursor-pointer ${
          selectedChart === 'bar' ? 'ring-2 ring-teal-500' : ''
        }`}
        onClick={() => setSelectedChart(selectedChart === 'bar' ? null : 'bar')}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Open Tasks by Assignee
        </h3>
        <div className="text-sm text-gray-500 mb-3">Active Tasks</div>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis 
                domain={[0, 10]} 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                fill="#3B82F6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between items-center mt-3">
          {barData.slice(0, 3).map((user) => (
            <div key={user.name} className="text-center">
              <div className="text-lg mb-1">{user.avatar}</div>
              <div className="text-xs text-gray-600">{user.name}</div>
              <div className="text-sm font-semibold text-gray-800">{user.value}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Line Chart */}
      <motion.div 
        whileHover={{ y: -2 }}
        className={`bg-white rounded-lg border border-gray-200 p-6 transition-all duration-200 hover:shadow-md cursor-pointer ${
          selectedChart === 'line' ? 'ring-2 ring-teal-500' : ''
        }`}
        onClick={() => setSelectedChart(selectedChart === 'line' ? null : 'line')}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Weekly Task Completion
        </h3>
        <div className="text-sm text-gray-500 mb-3">Last 7 days</div>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="completed" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="pending" 
                stroke="#9CA3AF" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#9CA3AF', strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center space-x-6 mt-3">
          <div className="flex items-center text-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Completed</span>
          </div>
          <div className="flex items-center text-sm">
            <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Pending</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TaskCharts;
