import { Briefcase, Calendar, MapPin, Star } from "lucide-react";

export default function ApplicationCard({ application }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-gray-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{application.company}</h3>
          <p className="text-sm text-gray-500">{application.role}</p>
        </div>
      </div>

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
        <p className="text-blue-600 font-medium">{application.status}</p>
      </div>
    </div>
  );
}
