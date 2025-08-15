import ApplicationItem from "./ApplicationItem";

export default function ApplicationList({ applications }) {
  if (!applications?.length) {
    return (
      <div className="text-sm text-gray-600">
        No applications yet. Add your first one!
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      {applications.map((app) => (
        <ApplicationItem key={app.id} app={app} />
      ))}
    </div>
  );
}
