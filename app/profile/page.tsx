export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-10 text-white">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Profile</h1>
          <p className="mt-2 text-slate-400">
            Manage your account, resume preferences, and saved settings.
          </p>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="mb-4 text-2xl font-bold">Account Details</h2>

          <div className="space-y-4">
            <input
              className="w-full rounded-xl bg-slate-800 p-4 outline-none"
              placeholder="Full Name"
            />

            <input
              className="w-full rounded-xl bg-slate-800 p-4 outline-none"
              placeholder="Email"
            />

            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500">
              Save Profile
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}