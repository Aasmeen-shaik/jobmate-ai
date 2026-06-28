"use client";
import { useEffect, useState } from "react";
import AppNavbar from "../../components/AppNavbar";
import ResumeUploader from "../../components/ResumeUploader";
import JobDescriptionBox from "../../components/JobDescriptionBox";
import GenerateOptions from "../../components/GenerateOptions";
import GenerateButton from "../../components/GenerateButton";
import PageHeader from "../../components/PageHeader";
import GeneratedResults from "../../components/GeneratedResults";


export default function DashboardPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [showResults, setShowResults] = useState(
  typeof window !== "undefined" &&
    localStorage.getItem("jobDescription") === "Restored from saved history"
);
useEffect(() => {
  const savedJD = localStorage.getItem("jobDescription");
  const shouldOpenSaved = localStorage.getItem("openSavedAnalysis");

  if (savedJD) {
    setJobDescription(savedJD);
  }

  if (shouldOpenSaved === "true") {
    setShowResults(true);
    localStorage.removeItem("openSavedAnalysis");
  }
}, []);

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <AppNavbar />

        <PageHeader
          title="Dashboard"
          description="Upload your resume and paste a job description to generate recruiter emails, LinkedIn connection notes, interview questions, personalized interview answers, and an ATS match score."
        />

        <div className="space-y-6">
          <ResumeUploader
            resumeFile={resumeFile}
            setResumeFile={setResumeFile}
          />

          <JobDescriptionBox
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
          />
        </div>

        <GenerateOptions />

        <GenerateButton
          resumeFile={resumeFile}
          jobDescription={jobDescription}
          onGenerateComplete={() => setShowResults(true)}
        />

        {showResults && <GeneratedResults />}
      </div>
    </main>
  );
}