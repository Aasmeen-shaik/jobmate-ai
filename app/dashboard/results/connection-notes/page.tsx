const notes = [
  "Recruiter Connection Note",
  "Hiring Manager Note",
  "Networking Note",
  "Follow-Up Note",
];

export default function ConnectionNotesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-10 text-white">
      <div className="mx-auto max-w-4xl space-y-6">
        <a href="/dashboard/results" className="text-sm text-blue-400">
          ← Back to Results
        </a>

        <div>
          <h1 className="text-4xl font-bold">LinkedIn Connection Notes</h1>
          <p className="mt-2 text-slate-400">
            Four short LinkedIn notes. Each must stay under 300 characters.
          </p>
        </div>

        {notes.map((note) => (
          <section
            key={note}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">{note}</h2>

              <button className="rounded-xl border border-slate-700 px-4 py-2 text-sm">
                Copy
              </button>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-slate-300">
              Connection note will appear here after AI is connected.
            </div>

            <p className="mt-3 text-sm text-blue-400">0 / 300 characters</p>
          </section>
        ))}
      </div>
    </main>
  );
}