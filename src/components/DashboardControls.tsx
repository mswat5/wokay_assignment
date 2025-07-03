import { useState } from "react";
import { RefreshCw, Filter, Plus } from "lucide-react";

const DashboardControls = () => {
  const [editMode, setEditMode] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">Edit mode:</span>
            <button
              onClick={() => setEditMode(!editMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                editMode ? "bg-teal-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  editMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <RefreshCw className="w-4 h-4" />
              <span>Refreshed 3 mins ago</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Auto refresh:</span>
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  autoRefresh ? "bg-teal-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                    autoRefresh ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
              <span className="text-sm text-gray-600">On</span>
            </div>

            <button className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <button className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add card</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardControls;
