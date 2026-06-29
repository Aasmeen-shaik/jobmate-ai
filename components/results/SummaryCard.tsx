import { GeneratedAnalysis } from "../../lib/types";

type SummaryCardProps = {
  analysis: GeneratedAnalysis;
};

export default function SummaryCard({ analysis }: SummaryCardProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold">Generated Summary</h2>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-sm text-slate-400">ATS Score</p>
          <p className="mt-2 text-4xl font-bold text-blue-400">
            {analysis.ats.matchScore}%
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-sm text-slate-400">Emails</p>
          <p className="mt-2 text-4xl font-bold">{analysis.emails.length}</p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-sm text-slate-400">LinkedIn Notes</p>
          <p className="mt-2 text-4xl font-bold">{analysis.notes.length}</p>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-sm text-slate-400">Q&A Groups</p>
          <p className="mt-2 text-4xl font-bold">{analysis.questions.length}</p>
        </div>
      </div>
    </section>
  );
}
