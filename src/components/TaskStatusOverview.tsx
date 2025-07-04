import { useState, useEffect } from "react";
import { Clock, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const TaskStatusOverview = () => {
  const [animateNumbers, setAnimateNumbers] = useState(false);

  const statusData = [
    { 
      label: "Unassigned", 
      count: 8, 
      color: "bg-gray-50 border-gray-200", 
      textColor: "text-gray-700",
      numberColor: "text-gray-900",
      icon: AlertCircle,
      iconColor: "text-gray-500",
      trend: "+2 from yesterday",
      trendColor: "text-gray-600"
    },
    { 
      label: "In Progress", 
      count: 12, 
      color: "bg-blue-50 border-blue-200", 
      textColor: "text-blue-700",
      numberColor: "text-blue-600",
      icon: Clock,
      iconColor: "text-blue-500",
      trend: "+5 from yesterday",
      trendColor: "text-blue-600"
    },
    { 
      label: "Completed", 
      count: 24, 
      color: "bg-green-50 border-green-200", 
      textColor: "text-green-700",
      numberColor: "text-green-600",
      icon: CheckCircle,
      iconColor: "text-green-500",
      trend: "+8 from yesterday",
      trendColor: "text-green-600"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimateNumbers(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const CountUpAnimation = ({ target, className }: { target: number; className: string }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!animateNumbers) return;
      
      const increment = target / 20;
      const timer = setInterval(() => {
        setCurrent(prev => {
          const next = prev + increment;
          if (next >= target) {
            clearInterval(timer);
            return target;
          }
          return next;
        });
      }, 50);

      return () => clearInterval(timer);
    }, [target]);

    return (
      <div className={className}>
        {Math.floor(current)}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {statusData.map((status, index) => {
        const IconComponent = status.icon;
        return (
          <motion.div
            key={index}
            whileHover={{ y: -2 }}
            className={`bg-white rounded-lg border p-6 text-center transition-all duration-200 cursor-pointer hover:shadow-md ${status.color}`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-sm font-medium ${status.textColor}`}>
                {status.label}
              </h3>
              <IconComponent className={`w-4 h-4 ${status.iconColor}`} />
            </div>
            
            <CountUpAnimation 
              target={status.count}
              className={`text-4xl font-bold mb-1 ${status.numberColor}`}
            />
            
            <div className="text-sm text-gray-500 mb-2">tasks</div>
            
            <div className={`flex items-center justify-center text-xs ${status.trendColor}`}>
              <TrendingUp className="w-3 h-3 mr-1" />
              {status.trend}
            </div>
            
            {/* Simple progress indicator */}
            <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: animateNumbers ? `${(status.count / 44) * 100}%` : '0%' }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`h-1 rounded-full ${
                  status.label === "Unassigned" ? "bg-gray-400" :
                  status.label === "In Progress" ? "bg-blue-400" : "bg-green-400"
                }`}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TaskStatusOverview;
