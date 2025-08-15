import ApplicationList from "../components/ApplicationList";

export default function AllApplications({ applications }) {
  return (
    <section>
      <ApplicationList applications={applications} />
    </section>
  );
}
