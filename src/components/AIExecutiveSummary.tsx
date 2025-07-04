import { useState, useEffect } from "react";
import { Sparkles, Expand, RefreshCw, TrendingUp, AlertTriangle, CheckCircle, Brain } from "lucide-react";

const AIExecutiveSummary = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentInsight, setCurrentInsight] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const insights = [
    {
      title: "Team Productivity Surge",
      content: "Your team has completed 73% more tasks this week compared to last week. The Development team is leading with 18 completed tasks.",
      type: "positive",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Bottleneck Alert",
      content: "The Review process is experiencing delays with 8 pending tasks. Consider allocating additional reviewers to maintain workflow.",
      type: "warning",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      title: "Sprint Goal Achievement",
      content: "You're on track to exceed your sprint goal by 15%. Current completion rate suggests finishing 2 days ahead of schedule.",
      type: "success",
      icon: CheckCircle,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  const recommendations = [
    "Consider redistributing 3 tasks from Design to Development team",
    "Schedule additional code review sessions for Thursday",
    "Celebrate team achievements to maintain momentum"
  ];

  const handleRefresh = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setCurrentInsight((prev) => (prev + 1) % insights.length);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % insights.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [insights.length]);

  const currentData = insights[currentInsight];
  const IconComponent = currentData.icon;

  return (
    <div className={`bg-white flex-grow rounded-xl border border-gray-200 p-6 transition-all duration-500 hover:shadow-xl ${
      isExpanded ? 'row-span-2' : ''
    }`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            {isGenerating && (
              <div className="absolute inset-0 rounded-xl bg-purple-400 opacity-30 animate-ping"></div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              AI Executive Summary
              <Brain className="w-4 h-4 ml-2 text-purple-500" />
            </h3>
            <p className="text-sm text-gray-500">
              {isGenerating ? "Generating insights..." : "Updated just now"}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
          >
            <Expand className="w-4 h-4" />
          </button>
          <button 
            onClick={handleRefresh}
            disabled={isGenerating}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin text-purple-600' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Insight Card */}
      <div className={`${currentData.bgColor} ${currentData.borderColor} border rounded-xl p-4 mb-6 transition-all duration-500`}>
        <div className="flex items-start space-x-3">
          <div className={`p-2 rounded-lg bg-white shadow-sm`}>
            <IconComponent className={`w-5 h-5 ${currentData.color}`} />
          </div>
          <div className="flex-1">
            <h4 className={`font-semibold ${currentData.color} mb-2`}>
              {currentData.title}
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {currentData.content}
            </p>
          </div>
        </div>
      </div>

      {/* Insight Indicators */}
      <div className="flex justify-center space-x-2 mb-6">
        {insights.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentInsight(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentInsight ? 'bg-purple-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Recommendations Section */}
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            AI Recommendations
          </h4>
          <div className="space-y-2">
            {recommendations.map((rec, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-medium text-purple-600">{index + 1}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{rec}</p>
              </div>
            ))}
          </div>
        </div>

        {isExpanded && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Detailed Analytics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-xl font-bold text-blue-600">92%</div>
                <div className="text-xs text-gray-600">Team Efficiency</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-xl font-bold text-green-600">+18%</div>
                <div className="text-xs text-gray-600">Week over Week</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIExecutiveSummary;
