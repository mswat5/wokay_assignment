import {
  ChevronRight,
  Share2,
  Star,
  Download,
  Expand,
  MoreHorizontal,
} from "lucide-react";

const SecondaryHeader = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Dashboards</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Dashboard</span>
        </div>

        <div className="flex items-center space-x-3">
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <Star className="w-4 h-4" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <Download className="w-4 h-4" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <Expand className="w-4 h-4" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
