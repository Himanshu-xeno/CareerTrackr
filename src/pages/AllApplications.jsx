import { useState } from "react";
import ApplicationList from "../components/ApplicationList";

export default function AllApplications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  // Dummy applications
  const applications = [
    { id: 1, company: "Google", role: "SWE Intern", status: "Interview", date: "12 Aug 2025", location: "Bangalore" },
    { id: 2, company: "Amazon", role: "Backend Dev", status: "Applied", date: "10 Aug 2025", location: "Hyderabad" },
    { id: 3, company: "Microsoft", role: "Frontend Engg", status: "Offer", date: "05 Aug 2025", location: "Remote" },
    { id: 4, company: "Uber", role: "Mobile Engineer", status: "Rejected", date: "29 Jul 2025", location: "Mumbai" },
  ];

  // Filter applications
  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === "" || app.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section>
      {/* Search + Filter */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <input
          type="text"
          placeholder="Search by company or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Status</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Application Cards */}
      <ApplicationList applications={filteredApplications} />
    </section>
  );
}
