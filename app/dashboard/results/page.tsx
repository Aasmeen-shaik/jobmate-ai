import Link from "next/link";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-10 text-white">
      <div className="mx-auto max-w-5xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Results Summary</h1>
          <p className="mt-2 text-slate-400">
            Review your resume match and open the content you want.
          </p>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="mb-6 text-2xl font-bold">Resume Match Analysis</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-slate-800 p-6">
              <p className="text-slate-400">Match Score</p>
              <p className="mt-2 text-5xl font-bold text-blue-400">--%</p>
              <p className="mt-3 text-slate-400">
                Calculated from Resume + JD.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <h3 className="mb-3 text-xl font-semibold">ATS Insights</h3>
              <p className="text-slate-400">
                Missing skills, matching keywords, and resume suggestions will appear here.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <Link
            href="/dashboard/results/emails"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500"
          >
            <h3 className="text-xl font-bold">Recruiter Emails</h3>
            <p className="mt-2 text-slate-400">Open 5 email versions.</p>
            <p className="mt-6 text-blue-400">Open →</p>
          </Link>

          <Link
            href="/dashboard/results/connection-notes"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500"
          >
            <h3 className="text-xl font-bold">LinkedIn Notes</h3>
            <p className="mt-2 text-slate-400">Open 4 notes under 300 characters.</p>
            <p className="mt-6 text-blue-400">Open →</p>
          </Link>

          <Link
            href="/dashboard/results/questions"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500"
          >
            <h3 className="text-xl font-bold">Questions & Answers</h3>
            <p className="mt-2 text-slate-400">Open interview prep.</p>
            <p className="mt-6 text-blue-400">Open →</p>
          </Link>
        </section>
      </div>
    </main>
  );
}