import { GeneratedAnalysis } from "../../lib/types";

type NotesSectionProps = {
  analysis: GeneratedAnalysis;
};

export default function NotesSection({ analysis }: NotesSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-2xl font-bold">LinkedIn Connection Notes</h2>

      <div className="space-y-4">
        {analysis.notes.map((note) => (
          <div key={note.title} className="rounded-xl bg-slate-800 p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{note.title}</h3>

              <button
                onClick={() => navigator.clipboard.writeText(note.content)}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Copy
              </button>
            </div>

            <p className="mt-3 leading-7 text-slate-300">{note.content}</p>

            <p className="mt-2 text-sm text-blue-400">
              {note.content.length} / 300 characters
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}