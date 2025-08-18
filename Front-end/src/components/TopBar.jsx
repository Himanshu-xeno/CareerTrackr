export default function Topbar({ toggleSidebar }) {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <button onClick={toggleSidebar} className="lg:hidden text-gray-600">☰</button>
      <h2 className="text-lg font-semibold text-gray-700">Welcome Back 👋</h2>
      <img
        src="https://i.pravatar.cc/40"
        alt="profile"
        className="w-10 h-10 rounded-full border"
      />
    </header>
  );
}
