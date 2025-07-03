import { Sparkles, Expand, RefreshCw } from "lucide-react";

const AIExecutiveSummary = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              AI Executive Summary
            </h3>
            <p className="text-sm text-gray-500">Refreshed 3 mins ago</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <Expand className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Executive Summary</h4>
          <p className="text-gray-600">
            No tasks were updated in the last week.
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-2">
            Key Efforts & Initiatives
          </h4>
          <p className="text-gray-600">There are no active tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default AIExecutiveSummary;
