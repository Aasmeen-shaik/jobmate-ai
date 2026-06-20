export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Top Navigation */}
        <nav className="mb-10 flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            AI Job Copilot
          </h1>

          <div className="flex items-center gap-6">
            <a
              href="/history"
              className="text-slate-300 transition hover:text-white"
            >
              History
            </a>

            <a
              href="/login"
              className="text-slate-300 transition hover:text-red-400"
            >
              Logout
            </a>
          </div>
        </nav>

        {/* Page Header */}
        <div className="mb-10">
          <h2 className="mb-2 text-4xl font-bold">
            Dashboard
          </h2>

          <p className="text-slate-400">
            Upload your resume and paste a job description to generate
            recruiter emails, LinkedIn notes, interview questions, and
            personalized answers.
          </p>
        </div>

        {/* Resume Upload */}
        <div className="space-y-6">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Upload Resume
            </h2>

            <div className="rounded-xl border-2 border-dashed border-slate-700 bg-slate-950 p-12 text-center text-slate-400">

              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">
                ↑
              </div>

              <p className="mb-2 text-lg font-semibold text-white">
                Drag & Drop Resume
              </p>

              <p className="mb-5 text-sm text-slate-400">
                Supports PDF and DOCX files
              </p>

              <button className="rounded-lg border border-slate-700 px-5 py-2 hover:bg-slate-800">
                Choose File
              </button>
            </div>
          </div>

          {/* Job Description */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Job Description
            </h2>

            <textarea
              className="h-64 w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
              placeholder="Paste the job description here..."
            />
          </div>

        </div>

        {/* Generate Options */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Choose What to Generate
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Recruiter Emails",
              "LinkedIn Notes",
              "Interview Questions",
              "Personalized Answers",
            ].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 p-4"
              >
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5"
                />

                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="/dashboard/results"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold transition hover:bg-blue-500"
          >
            Generate AI Content
          </a>
        </div>

      </div>
    </main>
  );
}