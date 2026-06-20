export default function Home() {
  const features = [
    "Resume + JD Match Analysis",
    "Recruiter Email Generator",
    "LinkedIn Notes Under 300 Characters",
    "Interview Questions + Answers",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex items-center justify-between py-6">
          <h1 className="text-2xl font-bold">AI Job Copilot</h1>

          <div className="flex gap-4">
            <button className="rounded-lg border border-slate-700 px-4 py-2">
              Login
            </button>
            <button className="rounded-lg bg-blue-600 px-4 py-2">
              Sign Up
            </button>
          </div>
        </nav>

        <section className="py-24 text-center">
          <div className="mb-6 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm">
            🚀 AI-Powered Job Search Assistant
          </div>

          <h1 className="mx-auto max-w-5xl text-6xl font-bold leading-tight">
            Land More Interviews With
            <span className="text-blue-500"> AI Generated </span>
            Outreach & Interview Prep
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
            Upload your resume, paste a job description, and instantly generate
            recruiter emails, LinkedIn connection notes, interview questions,
            and personalized answers.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold">
              Get Started
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold">
              Watch Demo
            </button>
          </div>
        </section>

        <section className="grid gap-6 pb-20 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="mb-4 h-10 w-10 rounded-xl bg-blue-600" />
              <h3 className="text-lg font-semibold">{feature}</h3>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}