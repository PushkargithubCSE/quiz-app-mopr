"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FeedbackPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (!name.trim()) { setError("Please enter your name"); return; }
    if (!rating) { setError("Please select a rating"); return; }
    if (!message.trim()) { setError("Please write your feedback"); return; }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          rating,
          message: message.trim(),
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-theme/60 border border-theme rounded-xl px-5 py-3.5 text-primary font-body placeholder:text-faint focus:outline-none focus:border-theme0 focus:bg-theme/80 transition-all text-sm";
  const labelClass = "block text-primary/60 text-xs font-body font-medium tracking-wider uppercase mb-2";

  if (submitted) {
    return (
      <main className="min-h-screen bg-theme flex items-center justify-center p-6">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 rounded-full bg-sage/15 border border-sage/30 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-sage-c" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-bold text-primary mb-2">Thank You!</h2>
          <p className="text-muted font-body text-sm mb-2">à¤§à¤¨à¥à¤¯à¤µà¤¾à¤¦!</p>
          <p className="text-secondary font-body text-sm mb-8">Your feedback has been submitted successfully.</p>
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 bg-gold text-ink rounded-xl font-body font-semibold text-sm hover:bg-gold-light transition-all"
          >
            Back to Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-theme flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#D4A853 1px, transparent 1px), linear-gradient(90deg, #D4A853 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="w-full max-w-lg relative z-10">

        {/* Back button */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-muted hover:text-primary/60 transition-colors mb-6 font-body text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>

        <div className="bg-surface-2 border border-theme rounded-2xl p-8 glass-card">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-theme bg-parchment/5 text-primary/60 text-xs font-mono tracking-widest uppercase mb-4">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Feedback
            </div>
            <h1 className="font-display text-2xl font-bold text-primary">Submit Feedback</h1>
            <p className="text-muted text-sm font-body mt-1">à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤¦à¥‡à¤‚ Â· Share your thoughts with us</p>
          </div>

          <div className="space-y-5">

            {/* Name */}
            <div>
              <label className={labelClass}>Your Name <span className="text-crimson">*</span></label>
              <input
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); setError(""); }}
                placeholder="Enter your name..."
                maxLength={40}
                className={inputClass}
              />
            </div>

            {/* Phone (optional) */}
            <div>
              <label className={labelClass}>
                Contact Number <span className="text-muted normal-case font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9876543210"
                maxLength={16}
                className={inputClass}
              />
            </div>

            {/* Star Rating */}
            <div>
              <label className={labelClass}>Rating <span className="text-crimson">*</span></label>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => { setRating(star); setError(""); }}
                    className="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl border transition-all duration-200 group"
                    style={{
                      borderColor: rating !== null && star <= rating ? "rgba(212,168,83,0.6)" : "rgba(245,240,232,0.1)",
                      background: rating !== null && star <= rating ? "rgba(212,168,83,0.1)" : "rgba(245,240,232,0.03)",
                    }}
                  >
                    <svg
                      className="w-6 h-6 transition-colors"
                      fill={rating !== null && star <= rating ? "#D4A853" : "none"}
                      viewBox="0 0 24 24"
                      stroke={rating !== null && star <= rating ? "#D4A853" : "rgba(245,240,232,0.2)"}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className={`text-xs font-mono ${rating !== null && star <= rating ? "text-gold" : "text-faint"}`}>
                      {star}
                    </span>
                  </button>
                ))}
              </div>
              {rating && (
                <p className="text-muted text-xs font-body mt-2 text-center">
                  {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]}
                </p>
              )}
            </div>

            {/* Feedback message */}
            <div>
              <label className={labelClass}>Your Feedback <span className="text-crimson">*</span></label>
              <textarea
                value={message}
                onChange={(e) => { setMessage(e.target.value); setError(""); }}
                placeholder="Share your experience, suggestions or comments..."
                rows={4}
                maxLength={500}
                className={`${inputClass} resize-none`}
              />
              <p className="text-faint text-xs font-mono mt-1 text-right">{message.length}/500</p>
            </div>

          </div>

          {error && (
            <p className="mt-4 text-crimson text-xs font-body bg-crimson/10 border border-crimson/20 rounded-lg px-4 py-2">
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full mt-6 relative overflow-hidden rounded-xl py-4 font-body font-semibold text-ink text-sm tracking-wide transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #D4A853, #F0C87A, #D4A853)", backgroundSize: "200%" }}
          >
            <span className={`flex items-center justify-center gap-2 transition-all ${isSubmitting ? "opacity-0" : "opacity-100"}`}>
              Submit Feedback
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </span>
            {isSubmitting && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-5 h-5 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
              </span>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}

