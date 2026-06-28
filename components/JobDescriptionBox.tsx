type JobDescriptionBoxProps = {
  jobDescription: string;
  setJobDescription: (value: string) => void;
};

export default function JobDescriptionBox({
  jobDescription,
  setJobDescription,
}: JobDescriptionBoxProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-xl font-semibold">Job Description</h2>

      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the complete Job Description here..."
        className="h-72 w-full rounded-xl bg-slate-800 p-4 outline-none"
      />

      <div className="mt-3 flex justify-between text-sm text-slate-400">
        <span>No word or character limit</span>
        <span>{jobDescription.length} characters</span>
      </div>
    </div>
  );
}