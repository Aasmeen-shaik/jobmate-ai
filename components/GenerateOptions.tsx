const generateOptions = [
  "Recruiter Emails",
  "LinkedIn Connection Notes",
  "Interview Questions",
  "Personalized Answers",
];

export default function GenerateOptions() {
  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-5 text-xl font-semibold">Choose What To Generate</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {generateOptions.map((item) => (
          <label
            key={item}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 p-4 hover:border-blue-500"
          >
            <input type="checkbox" defaultChecked className="h-5 w-5" />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}