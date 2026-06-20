const historyItems: string[] = [];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-10 text-white">
      <div className="mx-auto max-w-5xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Saved History</h1>
          <p className="mt-2 text-slate-400">
            Reopen previous resume and job description analyses.
          </p>
        </div>

        {historyItems.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">
            <h2 className="text-2xl font-semibold">
              No Saved Analyses Yet
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-slate-400">
              Upload a resume and paste a job description to generate your first
              AI job search package.
            </p>

            <a
              href="/dashboard"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              Go to Dashboard
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {historyItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item}</h2>
                  <p className="mt-1 text-slate-400">
                    Generated result saved here.
                  </p>
                </div>

                <a href="/dashboard/results" className="text-blue-400">
                  Open →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}