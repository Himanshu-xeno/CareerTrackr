export default function ApplicationItem({ app }) {
  const statusColor = {
    Applied: "bg-blue-100 text-blue-800",
    Interview: "bg-yellow-100 text-yellow-800",
    Offer: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
  }[app.status] ?? "bg-gray-100 text-gray-800";

  return (
    <div className="rounded-lg border bg-white p-4 flex items-start justify-between gap-3">
      <div>
        <div className="text-sm text-gray-500">{app.company}</div>
        <div className="font-medium">{app.title}</div>
        <div className="text-xs text-gray-500 mt-1">
          Applied on {app.dateApplied}
        </div>
        {app.notes && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{app.notes}</p>
        )}
      </div>

      <span className={`text-xs rounded-full px-2 py-1 ${statusColor}`}>
        {app.status}
      </span>
    </div>
  );
}
