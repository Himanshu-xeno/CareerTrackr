import { Briefcase, Calendar, MapPin, Star } from "lucide-react";

export default function ApplicationCard({ application }) {
  // Define colors for different statuses
  const statusColor = {
    Applied: "bg-blue-100 text-blue-800",
    Interview: "bg-yellow-100 text-yellow-800",
    Offer: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
  }[application.status] ?? "bg-gray-100 text-gray-800"; // default color

  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
      {/* Top section: icon + company info */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-gray-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{application.company}</h3>
          <p className="text-sm text-gray-500">{application.role}</p>
        </div>
      </div>

      {/* Bottom section: details + status */}
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-600">
        <p className="flex items-center gap-2">
          <Calendar className="w-4 h-4" /> {application.date}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="w-4 h-4" /> {application.location}
        </p>
        <p className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" /> {application.priority}
        </p>
        {/* Status badge */}
        <span
          className={`inline-block text-sm font-semibold px-3 py-1 rounded-full ${statusColor}`}
          style={{ minWidth: "fit-content", textAlign: "center" }}
        >
          {application.status}
        </span>
      </div>
    </div>
  );
}
