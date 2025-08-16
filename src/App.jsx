import Sidebar from "./components/SideBar";
import AllApplications from "./pages/AllApplications";
import { useState } from "react";

export default function App() {
  // State to track sidebar open/close
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <main className="flex-1 overflow-y-auto p-6">
          <AllApplications />
        </main>
      </div>
    </div>
  );
}
