import { useState, useEffect } from "react";
import { RefreshCw, Filter, Plus, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DashboardControls = () => {
  const [editMode, setEditMode] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState("3 mins ago");
  const [filterCount, setFilterCount] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
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
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* Edit Mode Toggle */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">Edit mode:</span>
            <button
              onClick={() => setEditMode(!editMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                editMode ? "bg-teal-600" : "bg-gray-200"
              }`}
            >
              <motion.span
                animate={{ x: editMode ? 24 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="inline-block h-4 w-4 transform rounded-full bg-white"
              />
            </button>
            {editMode && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-teal-600 font-medium"
              >
                Active
              </motion.span>
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
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Auto refresh:</span>
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  autoRefresh ? "bg-teal-600" : "bg-gray-200"
                }`}
              >
                <motion.span
                  animate={{ x: autoRefresh ? 20 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="inline-block h-3 w-3 transform rounded-full bg-white"
                />
              </button>
              <span className={`text-sm ${autoRefresh ? 'text-teal-600' : 'text-gray-500'}`}>
                {autoRefresh ? 'On' : 'Off'}
              </span>
            </div>

            {/* Filters */}
            <div className="relative">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors border border-gray-200"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                {filterCount > 0 && (
                  <span className="bg-teal-600 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[16px] text-center">
                    {filterCount}
                  </span>
                )}
              </button>

              {/* Filter Dropdown */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4"
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Add Card Button */}
        <button className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add card</span>
        </button>
      </div>

      {/* Active filters display */}
      <AnimatePresence>
        {filterCount > 0 && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 flex items-center space-x-2"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardControls;
