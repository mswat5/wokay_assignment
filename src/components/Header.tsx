import React from "react";
import {
  Search,
  Sparkles,
  Plus,
  Settings,
  Bell,
  HelpCircle,
} from "lucide-react";

const Header = () => {
  return (
    <header className="bg-teal-700 text-white">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <div className="w-5 h-5 bg-teal-700 rounded-sm"></div>
          </div>
        </div>

        <div className="flex items-center bg-teal-600 rounded-md px-3 py-1.5 w-80">
          <Search className="w-4 h-4 text-teal-300 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-teal-300 outline-none w-full"
          />
        </div>

        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-1 bg-teal-600 hover:bg-teal-500 px-3 py-1.5 rounded-md transition-colors">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">AI</span>
          </button>

          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-1.5 rounded-md text-sm font-medium transition-colors">
            Upgrade
          </button>

          <button className="flex items-center space-x-1 bg-white text-teal-700 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">New</span>
          </button>

          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-teal-300 hover:text-white cursor-pointer" />
            <Settings className="w-5 h-5 text-teal-300 hover:text-white cursor-pointer" />
            <HelpCircle className="w-5 h-5 text-teal-300 hover:text-white cursor-pointer" />
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-semibold">
              S
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
