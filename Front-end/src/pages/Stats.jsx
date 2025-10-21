import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, ResponsiveContainer } from "recharts";

export default function StatsPage({ applications }) {
  const COLORS = ["#3b82f6", "#22c55e", "#facc15", "#ef4444"];

  // Pie chart: Applications by Status
  const statusData = [
    { name: "Applied", value: applications.filter(a => a.status === "Applied").length },
    { name: "Interview", value: applications.filter(a => a.status === "Interview").length },
    { name: "Offer", value: applications.filter(a => a.status === "Offer").length },
    { name: "Rejected", value: applications.filter(a => a.status === "Rejected").length },
  ];

  // Bar chart: Priority count
  const priorityData = [
    { name: "High", value: applications.filter(a => a.priority === "High").length },
    { name: "Medium", value: applications.filter(a => a.priority === "Medium").length },
    { name: "Low", value: applications.filter(a => a.priority === "Low").length },
  ];

  // Line chart: Applications over time
  const timelineData = applications.map(a => ({ date: a.date, count: 1 }));

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-800">📊 Application Stats</h1>

      {/* Pie Chart */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">By Status</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={statusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-green-600">By Priority</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={priorityData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-purple-600">Applications Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={timelineData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#a855f7" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
