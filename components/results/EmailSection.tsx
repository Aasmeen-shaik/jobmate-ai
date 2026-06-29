import { GeneratedAnalysis } from "../../lib/types";

type EmailSectionProps = {
  analysis: GeneratedAnalysis;
};

export default function EmailSection({ analysis }: EmailSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-2xl font-bold">Recruiter Emails</h2>

      <div className="space-y-4">
        {analysis.emails.map((email) => (
          <div key={email.title} className="rounded-xl bg-slate-800 p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{email.title}</h3>

              <button
                onClick={() => navigator.clipboard.writeText(email.content)}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Copy
              </button>
            </div>

            <p className="mt-3 leading-7 text-slate-300">{email.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}