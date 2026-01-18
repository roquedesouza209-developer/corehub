export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-white/5 p-8 rounded-2xl border border-white/10">
        <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
        <p className="text-gray-400 mb-6">
          Sign in to continue to CoreHub
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Don’t have an account?{" "}
          <a href="/auth/register" className="text-white underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
