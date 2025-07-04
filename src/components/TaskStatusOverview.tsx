import { useState, useEffect } from "react";
import { Clock, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";

const TaskStatusOverview = () => {
  const [animateNumbers, setAnimateNumbers] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const statusData = [
    { 
      label: "Unassigned", 
      count: 8, 
      color: "bg-orange-50 border-orange-200", 
      textColor: "text-orange-700",
      numberColor: "text-orange-600",
      icon: AlertCircle,
      iconColor: "text-orange-500",
      trend: "+2 from yesterday",
      trendColor: "text-orange-600"
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
    // Trigger number animation on mount
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
    }, [target]); // Remove animateNumbers from dependencies

    return (
      <div className={className}>
        {Math.floor(current)}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {statusData.map((status, index) => {
        const IconComponent = status.icon;
        return (
          <div
            key={index}
            className={`bg-white rounded-xl border-2 p-6 text-center transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg ${
              status.color
            } ${hoveredCard === index ? 'shadow-xl' : 'shadow-sm'}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-sm font-semibold ${status.textColor}`}>
                {status.label}
              </h3>
              <IconComponent className={`w-5 h-5 ${status.iconColor}`} />
            </div>
            
            <CountUpAnimation 
              target={status.count}
              className={`text-4xl font-bold mb-2 ${status.numberColor}`}
            />
            
            <div className="text-sm text-gray-500 mb-2">tasks</div>
            
            <div className={`flex items-center justify-center text-xs ${status.trendColor} opacity-80`}>
              <TrendingUp className="w-3 h-3 mr-1" />
              {status.trend}
            </div>
            
            {/* Progress bar */}
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                  status.label === "Unassigned" ? "bg-orange-400" :
                  status.label === "In Progress" ? "bg-blue-400" : "bg-green-400"
                }`}
                style={{ 
                  width: animateNumbers ? `${(status.count / 44) * 100}%` : '0%'
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskStatusOverview;
