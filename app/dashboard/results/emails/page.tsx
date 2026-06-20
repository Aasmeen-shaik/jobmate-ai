const emails = [
  "Professional Recruiter Email",
  "ATS Optimized Email",
  "Networking Email",
  "Hiring Manager Email",
  "Vendor Submission Email",
];

export default function EmailsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "40px 24px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <a
          href="/dashboard/results"
          style={{ color: "#93c5fd", fontSize: "14px", textDecoration: "none" }}
        >
          ← Back to Results
        </a>

        <h1 style={{ fontSize: "42px", fontWeight: 700, marginTop: "24px" }}>
          Recruiter Emails
        </h1>

        <p style={{ color: "#94a3b8", marginTop: "8px", marginBottom: "32px" }}>
          Five polished email versions generated from your resume and job description.
        </p>

        <div style={{ display: "grid", gap: "20px" }}>
          {emails.map((email) => (
            <section
              key={email}
              style={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: "20px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                }}
              >
                <h2 style={{ fontSize: "22px", fontWeight: 600 }}>
                  {email}
                </h2>

                <button
                  style={{
                    background: "#1e293b",
                    color: "white",
                    border: "1px solid #334155",
                    borderRadius: "10px",
                    padding: "8px 14px",
                    cursor: "pointer",
                  }}
                >
                  Copy
                </button>
              </div>

              <div
                style={{
                  background: "#020617",
                  border: "1px solid #1e293b",
                  borderRadius: "14px",
                  padding: "20px",
                  color: "#cbd5e1",
                  lineHeight: "1.7",
                }}
              >
                Generated email content will appear here after AI is connected.
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}