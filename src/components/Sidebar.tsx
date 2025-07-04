import React, { useState } from "react";
import {
  Home,
  Inbox,
  Users,
  FileText,
  BarChart3,
  Layers,
  FileSpreadsheet,
  Video,
  Target,
  Clock,
  MoreHorizontal,
  ChevronDown,
  ChevronRight,
  Search,
  Plus,
  UserPlus,
  HelpCircle,
} from "lucide-react";

const Sidebar = () => {
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [spacesOpen, setSpacesOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: "Home", active: false },
    { icon: Inbox, label: "Inbox", active: false },
    { icon: Users, label: "Teams", active: false },
    { icon: FileText, label: "Docs", active: false },
    { icon: BarChart3, label: "Dashboards", active: true },
    { icon: Layers, label: "Whiteboards", active: false },
    { icon: FileSpreadsheet, label: "Forms", active: false },
    { icon: Video, label: "Clips", active: false },
    { icon: Target, label: "Goals", active: false },
    { icon: Clock, label: "Timesheets", active: false },
    { icon: MoreHorizontal, label: "More", active: false },
  ];

  return (
    <div className="w-64 bg-gray-50 h-full border-r border-gray-200 flex flex-col flex-shrink-0">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            S
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-1">
              {/* TODO: yaha pe text clipper type kux rhta css me wo lgana hai jese lyfelynk app me kia */}
              <span className="text-sm font-medium text-gray-900">
                Swatantra mi...
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
              item.active
                ? "bg-teal-100 text-teal-700 font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </a>
        ))}

        <div className="pt-4">
          <button
            onClick={() => setFavoritesOpen(!favoritesOpen)}
            className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {favoritesOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            <span className="font-medium">Favorites</span>
          </button>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setSpacesOpen(!spacesOpen)}
            className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {spacesOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            <span className="font-medium">Spaces</span>
            <div className="ml-auto flex items-center space-x-1">
              <Search className="w-3 h-3" />
              <Plus className="w-3 h-3" />
            </div>
          </button>

          {spacesOpen && (
            <div className="ml-4 mt-1 space-y-1">
              <a
                href="#"
                className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Everything</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Team Space</span>
              </a>
              <button className="flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                <Plus className="w-3 h-3" />
                <span>Create Space</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200 space-y-2">
        <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
          <UserPlus className="w-4 h-4" />
          <span>Invite</span>
        </button>
        <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
          <HelpCircle className="w-4 h-4" />
          <span>Help</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
