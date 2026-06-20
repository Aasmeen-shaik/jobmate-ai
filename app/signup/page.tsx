export default function SignupPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center text-white p-6">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 border border-slate-800">
        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
        <p className="text-slate-400 mb-6">
          Sign up to start generating job search content.
        </p>

        <input
          className="w-full mb-4 rounded-xl bg-slate-800 p-4 outline-none"
          placeholder="Email"
        />

        <input
          className="w-full mb-4 rounded-xl bg-slate-800 p-4 outline-none"
          placeholder="Create Password"
          type="password"
        />

        <input
          className="w-full mb-6 rounded-xl bg-slate-800 p-4 outline-none"
          placeholder="Confirm Password"
          type="password"
        />

        <a
          href="/dashboard"
          className="block text-center rounded-xl bg-blue-600 py-4 font-semibold"
        >
          Create Account
        </a>

        <p className="mt-6 text-center text-slate-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}