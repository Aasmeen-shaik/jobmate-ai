"use client";

import { useState } from "react";

const emails = [
  "Professional Recruiter Email",
  "ATS Optimized Email",
  "Networking Email",
  "Hiring Manager Email",
  "Vendor Submission Email",
];

const notes = [
  "Recruiter Connection Note",
  "Hiring Manager Note",
  "Networking Note",
  "Follow-Up Note",
];

const questionGroups = [
  "Common Questions",
  "Project Questions",
  "Tools & Framework Questions",
  "Scenario Questions",
  "Experience Questions",
  "Advanced Technical Questions",
];

export default function GeneratedResults() {
  const [openSection, setOpenSection] = useState<string>("ats");

  return (
    <div className="mt-10 space-y-6">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-6 text-2xl font-bold">Generated Summary</h2>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-xl bg-slate-800 p-5">
            <p className="text-sm text-slate-400">ATS Score</p>
            <p className="mt-2 text-4xl font-bold text-blue-400">--%</p>
          </div>

          <div className="rounded-xl bg-slate-800 p-5">
            <p className="text-sm text-slate-400">Emails</p>
            <p className="mt-2 text-4xl font-bold">5</p>
          </div>

          <div className="rounded-xl bg-slate-800 p-5">
            <p className="text-sm text-slate-400">LinkedIn Notes</p>
            <p className="mt-2 text-4xl font-bold">4</p>
          </div>

          <div className="rounded-xl bg-slate-800 p-5">
            <p className="text-sm text-slate-400">Q&A Groups</p>
            <p className="mt-2 text-4xl font-bold">6</p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["ats", "ATS Analysis"],
          ["emails", "Emails"],
          ["notes", "LinkedIn Notes"],
          ["questions", "Questions & Answers"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setOpenSection(key)}
            className={`rounded-xl border p-4 text-left font-semibold transition ${
              openSection === key
                ? "border-blue-500 bg-blue-600"
                : "border-slate-800 bg-slate-900 hover:border-blue-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {openSection === "ats" && (
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-bold">ATS Match Analysis</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-slate-800 p-5">
              <h3 className="font-semibold">Matching Skills</h3>
              <p className="mt-2 text-slate-400">
                Matching skills will appear here.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-5">
              <h3 className="font-semibold">Missing Skills</h3>
              <p className="mt-2 text-slate-400">
                Missing skills will appear here.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-5">
              <h3 className="font-semibold">Resume Suggestions</h3>
              <p className="mt-2 text-slate-400">
                Resume improvement suggestions will appear here.
              </p>
            </div>
          </div>
        </section>
      )}

      {openSection === "emails" && (
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-bold">Recruiter Emails</h2>

          <div className="space-y-4">
            {emails.map((email) => (
              <div key={email} className="rounded-xl bg-slate-800 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{email}</h3>
                  <button className="text-sm text-blue-400 hover:text-blue-300">
                    Copy
                  </button>
                </div>

                <p className="mt-3 text-slate-400">
                  Generated email content will appear here.
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {openSection === "notes" && (
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-bold">
            LinkedIn Connection Notes
          </h2>

          <div className="space-y-4">
            {notes.map((note) => (
              <div key={note} className="rounded-xl bg-slate-800 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{note}</h3>
                  <button className="text-sm text-blue-400 hover:text-blue-300">
                    Copy
                  </button>
                </div>

                <p className="mt-3 text-slate-400">
                  Generated note under 300 characters will appear here.
                </p>

                <p className="mt-2 text-sm text-blue-400">0 / 300 characters</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {openSection === "questions" && (
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-bold">
            Interview Questions & Answers
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {questionGroups.map((group) => (
              <div key={group} className="rounded-xl bg-slate-800 p-5">
                <h3 className="font-semibold">{group}</h3>
                <p className="mt-2 text-slate-400">
                  Questions and personalized answers will appear here.
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
  <h2 className="text-2xl font-bold">Save This Analysis</h2>

  <p className="mt-2 text-slate-400">
    Save this generated job package so you can reopen it later from History.
  </p>

  <button
    onClick={() => alert("Saved to history. Database connection will be added later.")}
    className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
  >
    Save to History
  </button>
</section>
<section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
  <h2 className="text-2xl font-bold">Save This Analysis</h2>

  <p className="mt-2 text-slate-400">
    Save this generated job package so you can reopen it later from History.
  </p>

 <button
  onClick={() => {
    const savedHistory = JSON.parse(localStorage.getItem("jobHistory") || "[]");

    const jobDescription = localStorage.getItem("jobDescription") || "";

const newItem = {
  id: Date.now(),
  resumeFileName: localStorage.getItem("resumeFileName") || "Resume",
  jobDescription,
  jobDescriptionLength: jobDescription.length,
  createdAt: new Date().toLocaleString(),
};

    localStorage.setItem(
      "jobHistory",
      JSON.stringify([newItem, ...savedHistory])
    );

    alert("Saved to history.");
  }}
  className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
>
  Save to History
</button>
</section>
    </div>
  );
}
