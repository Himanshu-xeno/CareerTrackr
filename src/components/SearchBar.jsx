import { Search } from "lucide-react"; // small icon library

export default function SearchBar({ searchTerm, setSearchTerm, filter, setFilter }) {
  return (
    <div className="flex gap-3 w-1/2">
      {/* Search Input with Icon */}
      <div className="relative w-1/2">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border pl-8 p-2 rounded w-full"
        />
      </div>

      {/* Status Dropdown */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded w-1/2"
      >
        <option value="">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
}
