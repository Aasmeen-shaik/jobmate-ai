import { GeneratedAnalysis } from "../../lib/types";

type QuestionsSectionProps = {
  analysis: GeneratedAnalysis;
};

export default function QuestionsSection({ analysis }: QuestionsSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-2xl font-bold">
        Interview Questions & Answers
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {analysis.questions.map((group) => (
          <div key={group.category} className="rounded-xl bg-slate-800 p-5">
            <h3 className="font-semibold">{group.category}</h3>

            <ul className="mt-3 space-y-2 text-slate-300">
              {group.items.map((question) => (
                <li key={question}>• {question}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}