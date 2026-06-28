type ResumeUploaderProps = {
  resumeFile: File | null;
  setResumeFile: (file: File | null) => void;
};

export default function ResumeUploader({
  resumeFile,
  setResumeFile,
}: ResumeUploaderProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-xl font-semibold">Upload Resume</h2>

      <div className="rounded-xl border-2 border-dashed border-slate-700 bg-slate-950 p-12 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl">
          📄
        </div>

        <p className="mb-2 text-lg font-semibold">Upload your Resume</p>

        <p className="mb-6 text-slate-400">Supports PDF and DOCX files.</p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
          className="mx-auto block max-w-xs rounded-lg border border-slate-700 px-5 py-2 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white"
        />

        {resumeFile && (
          <p className="mt-5 text-green-400">✅ {resumeFile.name}</p>
        )}
      </div>
    </div>
  );
}