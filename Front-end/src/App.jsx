// import Sidebar from "./components/SideBar";
// import AllApplications from "./pages/AllApplications";
// import StatsPage from "./pages/Stats"; // new page
// import { useState } from "react";

// export default function App() {
//   // State to track sidebar open/close
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   // Applications now live in App state
//   const [applications, setApplications] = useState([
//     { id: 1, company: "Google", role: "SWE Intern", status: "Interview", date: "12 Aug 2025", location: "Bangalore", priority: "High" },
//     { id: 2, company: "Amazon", role: "Backend Dev", status: "Applied", date: "10 Aug 2025", location: "Hyderabad", priority: "Medium" },
//     { id: 3, company: "Microsoft", role: "Frontend Engg", status: "Offer", date: "05 Aug 2025", location: "Remote", priority: "High" },
//     { id: 4, company: "Uber", role: "Mobile Engineer", status: "Rejected", date: "29 Jul 2025", location: "Mumbai", priority: "Low" },
//     { id: 5, company: "Facebook", role: "Fullstack Developer", status: "Applied", date: "08 Aug 2025", location: "Pune", priority: "Medium" },
//     { id: 6, company: "Apple", role: "iOS Developer", status: "Interview", date: "11 Aug 2025", location: "Bangalore", priority: "High" },
//     { id: 7, company: "Netflix", role: "Backend Engineer", status: "Applied", date: "09 Aug 2025", location: "Remote", priority: "Medium" },
//     { id: 8, company: "Adobe", role: "Frontend Developer", status: "Offer", date: "03 Aug 2025", location: "Hyderabad", priority: "High" },
//     { id: 9, company: "Spotify", role: "Software Engineer", status: "Interview", date: "07 Aug 2025", location: "Bangalore", priority: "Medium" },
//     { id: 10, company: "Salesforce", role: "Fullstack Engineer", status: "Applied", date: "06 Aug 2025", location: "Pune", priority: "Medium" },
//     { id: 11, company: "Twitter", role: "Backend Dev", status: "Rejected", date: "01 Aug 2025", location: "Mumbai", priority: "Low" },
//     { id: 12, company: "LinkedIn", role: "Frontend Engg", status: "Offer", date: "04 Aug 2025", location: "Remote", priority: "High" },
//     { id: 13, company: "Snapchat", role: "Mobile Engineer", status: "Applied", date: "10 Aug 2025", location: "Bangalore", priority: "Medium" },
//     { id: 14, company: "Tesla", role: "Software Intern", status: "Interview", date: "12 Aug 2025", location: "Palo Alto", priority: "High" },
//     { id: 15, company: "Airbnb", role: "Fullstack Developer", status: "Applied", date: "09 Aug 2025", location: "Remote", priority: "Medium" },
//   ]);

//   // Function to update application status
//   const updateStatus = (id, newStatus) => {
//     setApplications((prev) =>
//       prev.map((app) =>
//         app.id === id ? { ...app, status: newStatus } : app
//       )
//     );
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <Sidebar
//         isOpen={sidebarOpen}
//         toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
//       />

//       {/* Main content */}
//       <div className="flex flex-col flex-1">
//         <main className="flex-1 overflow-y-auto p-6">
//           {/* Pass applications + updateStatus */}
//           <AllApplications
//             applications={applications}
//             updateStatus={updateStatus}
//           />
//         </main>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import AllApplications from "./pages/AllApplications";
import StatsPage from "./pages/Stats"; // <- New Stats Page

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [applications, setApplications] = useState([
    { id: 1, company: "Google", role: "SWE Intern", status: "Interview", date: "12 Aug 2025", location: "Bangalore", priority: "High" },
    { id: 2, company: "Amazon", role: "Backend Dev", status: "Applied", date: "10 Aug 2025", location: "Hyderabad", priority: "Medium" },
    { id: 3, company: "Microsoft", role: "Frontend Engg", status: "Offer", date: "05 Aug 2025", location: "Remote", priority: "High" },
    { id: 4, company: "Uber", role: "Mobile Engineer", status: "Rejected", date: "29 Jul 2025", location: "Mumbai", priority: "Low" },
    { id: 5, company: "Facebook", role: "Fullstack Developer", status: "Applied", date: "08 Aug 2025", location: "Pune", priority: "Medium" },
    // ... rest of your applications
  ]);

  const updateStatus = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<AllApplications applications={applications} updateStatus={updateStatus} />} />
              <Route path="/stats" element={<StatsPage applications={applications} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
