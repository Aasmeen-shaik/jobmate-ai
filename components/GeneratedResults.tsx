"use client";

import { useState } from "react";
import { mockResults } from "../lib/mockResults";
import SummaryCard from "./results/SummaryCard";
import ATSSection from "./results/ATSSection";
import EmailSection from "./results/EmailSection";
import NotesSection from "./results/NotesSection";
import QuestionsSection from "./results/QuestionsSection";

export default function GeneratedResults() {
  const [openSection, setOpenSection] = useState("ats");

  return (
    <div className="mt-10 space-y-6">
      <SummaryCard analysis={mockResults} />

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

      {openSection === "ats" && <ATSSection analysis={mockResults} />}
      {openSection === "emails" && <EmailSection analysis={mockResults} />}
      {openSection === "notes" && <NotesSection analysis={mockResults} />}
      {openSection === "questions" && <QuestionsSection analysis={mockResults} />}

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
        <h2 className="text-2xl font-bold">Save This Analysis</h2>

        <p className="mt-2 text-slate-400">
          Save this generated job package so you can reopen it later from History.
        </p>

        <button
          onClick={() => {
            const savedHistory = JSON.parse(
              localStorage.getItem("jobHistory") || "[]"
            );

            const jobDescription = localStorage.getItem("jobDescription") || "";

            const newItem = {
              id: Date.now(),
              resumeFileName:
                localStorage.getItem("resumeFileName") || "Resume",
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