import { Home, FileText, Star, BarChart2, Settings } from "lucide-react";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`bg-white shadow-md h-full flex flex-col transition-all duration-300 ${
        isOpen ? "w-56" : "w-16"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1
          className={`text-2xl font-bold text-blue-600 transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          CareerTrackr
        </h1>

        {/* Toggle button only visible when sidebar is open */}
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className="text-gray-600 text-xl p-1 hover:bg-gray-200 rounded"
          >
            ☰
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-5 p-4 text-gray-700">
        {[
          { icon: Home, label: "Dashboard" },
          { icon: FileText, label: "Applications" },
          { icon: Star, label: "Shortlisted" },
          { icon: BarChart2, label: "Stats" },
          { icon: Settings, label: "Settings" },
        ].map(({ icon: Icon, label }) => (
          <a
            href="#"
            key={label}
            className="flex items-center gap-4 text-lg font-medium hover:text-blue-600 transition-all duration-300"
          >
            <Icon className="w-6 h-6 flex-shrink-0" />
            {isOpen && <span>{label}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
}
