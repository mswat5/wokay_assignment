import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { Users, Activity, Target } from "lucide-react";
import { motion } from "framer-motion";

const WorkloadChart = () => {
  const [activeBar, setActiveBar] = useState<number | null>(null);

  const data = [
    { name: "Development", completed: 45, inProgress: 25, pending: 15, total: 85 },
    { name: "Design", completed: 30, inProgress: 20, pending: 10, total: 60 },
    { name: "Testing", completed: 20, inProgress: 15, pending: 5, total: 40 },
    { name: "Review", completed: 35, inProgress: 10, pending: 8, total: 53 },
  ];

  const teamStats = [
    { label: "Active Members", value: 12, icon: Users, color: "text-gray-600" },
    { label: "Capacity Used", value: "73%", icon: Activity, color: "text-blue-600" },
    { label: "Weekly Goal", value: "85%", icon: Target, color: "text-green-600" },
  ];

  const CustomTooltip = ({ active, payload, label }: { 
    active?: boolean; 
    payload?: Array<{ payload: { completed: number; inProgress: number; pending: number; total: number } }>; 
    label?: string 
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          <div className="space-y-1">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Completed: {data.completed}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm">In Progress: {data.inProgress}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
              <span className="text-sm">Pending: {data.pending}</span>
            </div>
          </div>
          <div className="border-t pt-2 mt-2">
            <span className="text-sm font-medium">Total: {data.total} tasks</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-sm transition-shadow duration-200"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Team Workload Overview
        </h3>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {teamStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.02 }}
              className="text-center p-3 bg-gray-50 rounded-lg"
            >
              <IconComponent className={`w-4 h-4 mx-auto mb-1 ${stat.color}`} />
              <div className="text-sm font-semibold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            onMouseMove={(e: { activeTooltipIndex?: number }) => {
              if (e && e.activeTooltipIndex !== undefined) {
                setActiveBar(e.activeTooltipIndex);
              }
            }}
            onMouseLeave={() => setActiveBar(null)}
          >
            <XAxis 
              dataKey="name" 
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
            <Bar 
              dataKey="completed" 
              stackId="a" 
              fill="#10B981"
              radius={[0, 0, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`completed-${index}`} 
                  fill={activeBar === index ? "#059669" : "#10B981"}
                />
              ))}
            </Bar>
            <Bar 
              dataKey="inProgress" 
              stackId="a" 
              fill="#3B82F6"
              radius={[0, 0, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`inProgress-${index}`} 
                  fill={activeBar === index ? "#2563EB" : "#3B82F6"}
                />
              ))}
            </Bar>
            <Bar 
              dataKey="pending" 
              stackId="a" 
              fill="#9CA3AF"
              radius={[4, 4, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`pending-${index}`} 
                  fill={activeBar === index ? "#6B7280" : "#9CA3AF"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-6 mt-4">
        <div className="flex items-center text-sm">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Completed</span>
        </div>
        <div className="flex items-center text-sm">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-gray-600">In Progress</span>
        </div>
        <div className="flex items-center text-sm">
          <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Pending</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkloadChart;
