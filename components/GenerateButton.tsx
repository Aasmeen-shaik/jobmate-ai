"use client";

import { useState } from "react";

type GenerateButtonProps = {
  resumeFile: File | null;
  jobDescription: string;
  onGenerateComplete: () => void;
};

export default function GenerateButton({
  resumeFile,
  jobDescription,
  onGenerateComplete,
}: GenerateButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!resumeFile) {
      alert("Please upload your resume first.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please paste the job description first.");
      return;
    }

    localStorage.setItem("resumeFileName", resumeFile.name);
    localStorage.setItem("jobDescription", jobDescription);

    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
      onGenerateComplete();
    }, 1500);
  };

  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isGenerating ? "Generating..." : "Generate AI Content"}
      </button>

      {isGenerating && (
        <p className="text-sm text-slate-400">
          Analyzing resume and job description...
        </p>
      )}
    </div>
  );
}