import { useState } from "react";
import ApplicationList from "../components/ApplicationList";

export default function AllApplications({ applications, updateStatus }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [sortOption, setSortOption] = useState(""); // NEW

  // Filter applications
  let filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === "" || app.status === filter;

    return matchesSearch && matchesFilter;
  });

  // 🔽 Sorting Logic
  if (sortOption === "latest") {
    filteredApplications = [...filteredApplications].sort(
      (a, b) => new Date(b.date) - new Date(a.date) // latest first
    );
  } else if (sortOption === "oldest") {
    filteredApplications = [...filteredApplications].sort(
      (a, b) => new Date(a.date) - new Date(b.date) // oldest first
    );
  } else if (sortOption === "priorityHigh") {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };
    filteredApplications = [...filteredApplications].sort(
      (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
    );
  } else if (sortOption === "priorityLow") {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };
    filteredApplications = [...filteredApplications].sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  }

  return (
    <section>
      {/* Search + Filter + Sort */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search by company or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* 📌 Status Filter */}
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

        {/* 🔽 Sort Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Sort By</option>
          <option value="latest">Date: Latest</option>
          <option value="oldest">Date: Oldest</option>
          <option value="priorityHigh">Priority: High → Low</option>
          <option value="priorityLow">Priority: Low → High</option>
        </select>
      </div>

      {/* Application Cards */}
      <ApplicationList
        applications={filteredApplications}
        updateStatus={updateStatus}
      />
    </section>
  );
}
