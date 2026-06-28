export default function AppNavbar() {
  return (
    <nav className="mb-10 flex items-center justify-between">
      <h1 className="text-3xl font-bold">AI Job Copilot</h1>

      <div className="flex items-center gap-6">
        <a href="/history" className="text-slate-300 transition hover:text-white">
          History
        </a>

        <a href="/profile" className="text-slate-300 transition hover:text-white">
          Profile
        </a>

        <a href="/login" className="text-slate-300 transition hover:text-red-400">
          Logout
        </a>
      </div>
    </nav>
  );
}
