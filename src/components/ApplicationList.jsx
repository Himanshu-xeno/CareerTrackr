import ApplicationItem from "./ApplicationItem";

export default function ApplicationList({ applications, searchTerm, filter }) {
  if (!applications?.length) {
    return (
      <div className="text-sm text-gray-600">
        No applications yet. Add your first one!
      </div>
    );
  }

  const filteredApps = applications.filter((app) => {
    const matchesSearch = app.company
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter = filter === "" || app.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="grid gap-3">
      {filteredApps.length > 0 ? (
        filteredApps.map((app) => (
          <ApplicationItem key={app.id} app={app} />
        ))
      ) : (
        <div className="text-sm text-gray-600">
          No matching applications found.
        </div>
      )}
    </div>
  );
}
