"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-theme flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 glow-blob opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 glow-blob opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-subtle" />
        <div className="absolute inset-0 opacity-[0.03] bg-grid" />
      </div>

      <div className="w-full max-w-lg relative z-10">
        {/* Badge image */}
        <div className="flex justify-center mb-8">
          <img src="/badge-logo.png" alt="Knowledge Challenge" className="h-48 w-auto object-contain" />
        </div>

          {/* Card */}
        <div className="card glass-card p-10">
          {/* Logo */}

          {/* Title */}
          <h2 className="font-display text-center text-primary text-lg font-semibold leading-snug mt-3 mb-2">
             People’s Plan Campaign 
            <span className="block text-secondary text-sm font-body font-normal mt-1">
             सबकी योजना, सबका विकास           
             </span>
          </h2>

          <div className="deco-line w-32 mx-auto mt-4 mb-8" />

          {/* Options */}
          <div className="space-y-4">
            {/* Take Quiz */}
            <button
              onClick={() => router.push("/register")}
              className="w-full group card-inner rounded-xl py-5 px-6 transition-all duration-300 hover:opacity-90 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ background: "var(--gold-subtle)", border: "1px solid var(--gold-border)" }}>
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-display text-primary text-lg font-bold">Take Quiz</div>
                  <div className="text-muted text-xs font-body mt-0.5">क्विज़ दें · 15 questions · 1 attempt only</div>
                </div>
                <svg className="w-5 h-5 text-gold opacity-60 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>

            {/* Submit Feedback */}
            <button
              onClick={() => router.push("/feedback")}
              className="w-full group rounded-xl py-5 px-6 transition-all duration-300 text-left"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border-subtle)" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ background: "var(--surface)", border: "1px solid var(--border-subtle)" }}>
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-display text-primary text-lg font-bold group-hover:text-gold transition-colors">Submit Feedback</div>
                  <div className="text-muted text-xs font-body mt-0.5">प्रतिक्रिया दें · Share your thoughts</div>
                </div>
                <svg className="w-5 h-5 text-muted group-hover:text-gold group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>

          {/* Dashboard link */}
          <div className="mt-8 text-center">
            <button
              onClick={() => router.push("/dashboard")}
              className="text-muted hover:text-gold text-xs font-body transition-colors inline-flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              View Leaderboard & Dashboard
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {["Panchayati Raj"].map((cat) => (
            <span key={cat} className="px-3 py-1 rounded-full text-faint text-xs font-body"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border-subtle)" }}>
              {cat}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}