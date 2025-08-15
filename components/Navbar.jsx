export default function Navbar() {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-lg">CareerTrackr</div>
        <ul className="flex items-center gap-4 text-sm">
          <li><a className="hover:underline" href="#">All</a></li>
          <li><a className="hover:underline" href="#">Applied</a></li>
          <li><a className="hover:underline" href="#">Interviewed</a></li>
          <li><a className="hover:underline" href="#">Offers</a></li>
        </ul>
      </nav>
    </header>
  );
}
