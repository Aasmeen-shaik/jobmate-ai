const questionCategories = [
  "Common Questions",
  "Project Questions",
  "Tools & Framework Questions",
  "Scenario Questions",
  "Experience Questions",
  "Advanced Technical Questions",
];

export default function QuestionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-10 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <a
          href="/dashboard/results"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Results
        </a>

        <div>
          <h1 className="text-4xl font-bold">
            Interview Questions & Answers
          </h1>

          <p className="mt-2 text-slate-400">
            Personalized interview preparation generated from your resume and
            job description.
          </p>
        </div>

        {/* Questions */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="mb-6 text-2xl font-bold">
            Interview Questions
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {questionCategories.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-800 p-5"
              >
                <h3 className="font-semibold">{item}</h3>

                <p className="mt-2 text-sm text-slate-400">
                  10 AI-generated questions will appear here.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Answers */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="mb-6 text-2xl font-bold">
            Personalized Interview Answers
          </h2>

          <div className="rounded-xl bg-slate-800 p-6">
            <p className="leading-8 text-slate-300">
              AI-generated interview answers based on your experience,
              projects, skills, and the job description will appear here.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}