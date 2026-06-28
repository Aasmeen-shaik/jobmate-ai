"use client";

import { useEffect, useState } from "react";
import AppNavbar from "../../components/AppNavbar";
import PageHeader from "../../components/PageHeader";

type HistoryItem = {
  id: number;
  resumeFileName: string;
  jobDescription: string;
  jobDescriptionLength: number;
  createdAt: string;
};

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("jobHistory") || "[]");
    setHistory(saved);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("jobHistory");
    setHistory([]);
  };

  const deleteHistoryItem = (id: number) => {
    const updated = history.filter((item) => item.id !== id);
    localStorage.setItem("jobHistory", JSON.stringify(updated));
    setHistory(updated);
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <AppNavbar />

        <PageHeader
          title="History"
          description="View your previously generated AI job analyses."
        />

        {history.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center">
            <h2 className="text-2xl font-bold">No History Yet</h2>
            <p className="mt-3 text-slate-400">
              Generate your first AI job analysis and save it to history.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex justify-end">
              <button
                onClick={clearHistory}
                className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-500"
              >
                Clear History
              </button>
            </div>

            <div className="space-y-4">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">
                        {item.resumeFileName}
                      </h2>

                      <p className="mt-2 text-slate-400">
                        JD Length: {item.jobDescriptionLength} characters
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Generated: {item.createdAt}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          localStorage.setItem(
                            "resumeFileName",
                            item.resumeFileName
                          );

                          localStorage.setItem(
                            "jobDescription",
                            item.jobDescription
                          );

                          localStorage.setItem("openSavedAnalysis", "true");

                          window.location.href = "/dashboard";
                        }}
                        className="rounded-lg border border-blue-500 px-4 py-2 text-blue-400 hover:bg-blue-600 hover:text-white"
                      >
                        Open
                      </button>

                      <button
                        onClick={() => deleteHistoryItem(item.id)}
                        className="rounded-lg border border-red-500 px-4 py-2 text-red-400 hover:bg-red-600 hover:text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}