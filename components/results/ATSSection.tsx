import { GeneratedAnalysis } from "../../lib/types";

type ATSSectionProps = {
  analysis: GeneratedAnalysis;
};

export default function ATSSection({ analysis }: ATSSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-2xl font-bold">ATS Match Analysis</h2>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-slate-800 p-5">
          <h3 className="font-semibold">Matching Skills</h3>
          <ul className="mt-3 space-y-2 text-slate-400">
            {analysis.ats.matchingSkills.map((skill) => (
              <li key={skill}>✅ {skill}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <h3 className="font-semibold">Missing Skills</h3>
          <ul className="mt-3 space-y-2 text-slate-400">
            {analysis.ats.missingSkills.map((skill) => (
              <li key={skill}>⚠️ {skill}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-slate-800 p-5">
          <h3 className="font-semibold">Resume Suggestions</h3>
          <ul className="mt-3 space-y-2 text-slate-400">
            {analysis.ats.suggestions.map((suggestion) => (
              <li key={suggestion}>• {suggestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}