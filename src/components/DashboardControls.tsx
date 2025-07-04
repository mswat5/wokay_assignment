import { useState, useEffect } from "react";
import { RefreshCw, Filter, Plus, Settings, Eye, EyeOff, Clock } from "lucide-react";

const DashboardControls = () => {
  const [editMode, setEditMode] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState("3 mins ago");
  const [filterCount, setFilterCount] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setIsRefreshing(false);
      setLastRefresh("just now");
    }, 1500);
  };

  const toggleFilter = () => {
    setFilterCount(prev => prev === 0 ? 1 : 0);
  };

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        setLastRefresh(prev => {
          if (prev === "just now") return "1 min ago";
          if (prev === "1 min ago") return "2 mins ago";
          if (prev === "2 mins ago") return "3 mins ago";
          return "3 mins ago";
        });
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Edit Mode Toggle */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              {editMode ? <Eye className="w-4 h-4 text-teal-600" /> : <EyeOff className="w-4 h-4 text-gray-400" />}
              <span className="text-sm font-medium text-gray-700">Edit mode:</span>
            </div>
            <button
              onClick={() => setEditMode(!editMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                editMode ? "bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-300 shadow-md ${
                  editMode ? "translate-x-6 scale-110" : "translate-x-1"
                }`}
              />
              {editMode && (
                <div className="absolute inset-0 rounded-full bg-teal-400 opacity-20 animate-ping"></div>
              )}
            </button>
            {editMode && (
              <span className="text-xs text-teal-600 font-medium animate-pulse">Active</span>
            )}
          </div>

          {/* Refresh Status */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-teal-600' : ''}`} />
              <span>{isRefreshing ? "Refreshing..." : `Refreshed ${lastRefresh}`}</span>
            </button>

            {/* Auto Refresh Toggle */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">Auto refresh:</span>
              </div>
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                  autoRefresh ? "bg-gradient-to-r from-teal-500 to-teal-600 shadow-md" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-3 w-3 transform rounded-full bg-white transition-all duration-300 shadow-sm ${
                    autoRefresh ? "translate-x-5 scale-110" : "translate-x-1"
                  }`}
                />
                {autoRefresh && (
                  <div className="absolute inset-0 rounded-full bg-teal-400 opacity-20 animate-pulse"></div>
                )}
              </button>
              <span className={`text-sm font-medium transition-colors ${
                autoRefresh ? 'text-teal-600' : 'text-gray-500'
              }`}>
                {autoRefresh ? 'On' : 'Off'}
              </span>
            </div>

            {/* Filters */}
            <div className="relative">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:shadow-sm border border-gray-200"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                {filterCount > 0 && (
                  <span className="bg-teal-600 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                    {filterCount}
                  </span>
                )}
              </button>

              {/* Filter Dropdown */}
              {showFilters && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Filter Options</h4>
                  <div className="space-y-2">
                    {['Status', 'Assignee', 'Priority', 'Date'].map((filter) => (
                      <label key={filter} className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                          onChange={() => toggleFilter()}
                        />
                        <span className="text-sm text-gray-700">{filter}</span>
                      </label>
                    ))}
                  </div>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="mt-3 w-full px-3 py-1.5 bg-teal-600 text-white rounded-md text-sm hover:bg-teal-700 transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Add Card Button */}
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-gray-800 transition-colors">
            <Settings className="w-4 h-4" />
          </button>
          
          <button className="flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
            <Plus className="w-4 h-4" />
            <span>Add Card</span>
          </button>
        </div>
      </div>

      {/* Active filters display */}
      {filterCount > 0 && (
        <div className="mt-3 flex items-center space-x-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-md text-xs font-medium">
            Status: In Progress
          </span>
          <button 
            onClick={() => setFilterCount(0)}
            className="text-gray-400 hover:text-gray-600 text-xs"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
};

export default DashboardControls;
