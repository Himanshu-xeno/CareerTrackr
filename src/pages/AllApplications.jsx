import ApplicationList from "../components/ApplicationList";

export default function AllApplications({ applications, searchTerm, filter }) {
  return (
    <section>
      <ApplicationList 
        applications={applications} 
        searchTerm={searchTerm} 
        filter={filter} 
      />
    </section>
  );
}
