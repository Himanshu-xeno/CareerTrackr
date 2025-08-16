import { useState } from "react";
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import AllApplications from "./pages/AllApplications";

export default function App(){
  const [applications] = useState([
    {
      id : "g-1",
      company : "Google",
      title: "Frontend Intern",
      status: "Applied",
      dateApplied: "2025-08-10",
      notes: "Referred by college alum",
    },
    {
      id: "ms-2",
      company: "Microsoft",
      title: "Backend Developer",
      status: "Interview",
      dateApplied: "2025-08-08",
      notes: "HR call done; tech round pending",
    },
    {
      id: "amz-3",
      company: "Amazon",
      title: "Fullstack Engineer",
      status: "Offer",
      dateApplied: "2025-08-01",
      notes: "Offer evaluation in progress",
    },
    {
      id: "ub-4",
      company: "Uber",
      title: "Mobile Engineer",
      status: "Rejected",
      dateApplied: "2025-07-29",
      notes: "No DS round cleared",
    },
  ]);

  // 🔹 State for search & filter
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main className="max-w-4xl mx-auto p-4">
        {/* Heading + SearchBar on same row */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">All Applications</h1>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filter={filter}
            setFilter={setFilter}
          />
        </div>

        {/* Application List */}
        <AllApplications 
          applications={applications} 
          searchTerm={searchTerm}
          filter={filter}
        />
      </main>
    </div>
  );
}
