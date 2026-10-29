"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { questions, Participant } from "@/lib/questions";

const ADMIN_PHONE = "9871291315";

export default function QuizPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [participantInfo, setParticipantInfo] = useState<{
    id: string; name: string; phone: string; state: string;
    district: string; block: string; gp: string; startTime: number;
  } | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [autoSubmitted, setAutoSubmitted] = useState(false);

  // Refs so the polling timer always sees the latest values
  const submittedRef = useRef(false);
  const participantRef = useRef(participantInfo);
  const stateRef = useRef({ answers, selectedAnswer });
  participantRef.current = participantInfo;
  stateRef.current = { answers, selectedAnswer };

  useEffect(() => {
    const data = sessionStorage.getItem("quiz_participant");
    if (!data) {
      router.push("/");
      return;
    }
    setParticipantInfo(JSON.parse(data));
  }, [router]);

  const question = questions[currentQ];
  const progress = (currentQ / questions.length) * 100;
  const optionLabels = ["A", "B", "C", "D"];

  // One submit function for both normal finish and admin stop
  const submitQuiz = useCallback(
    async (finalAnswers: number[], auto: boolean) => {
      const info = participantRef.current;
      if (!info || submittedRef.current) return;
      submittedRef.current = true;
      setIsSaving(true);
      if (auto) setAutoSubmitted(true);

      // Unanswered questions get -1 (always wrong)
      const padded = Array.from({ length: questions.length }, (_, i) => finalAnswers[i] ?? -1);
      const score = padded.filter((a, i) => a === questions[i].correctAnswer).length;

      const participant: Participant = {
        id: info.id,
        name: info.name,
        phone: info.phone,
        state: info.state,
        district: info.district,
        block: info.block,
        gp: info.gp,
        score,
        totalQuestions: questions.length,
        answers: padded,
        completedAt: new Date().toISOString(),
        timeTaken: Math.floor((Date.now() - info.startTime) / 1000),
      };

      try {
        const res = await fetch("/api/participants", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(participant),
        });
        if (!res.ok) {
          const d = await res.json().catch(() => ({}));
          if (d.error === "already_attempted") {
            router.push("/?error=already_attempted");
            return;
          }
        }
      } catch (err) {
        console.error("Failed to save result:", err);
      } finally {
        setIsSaving(false);
      }

      sessionStorage.setItem("quiz_result", JSON.stringify(participant));
      router.push("/results");
    },
    [router]
  );

  // Poll quiz status; if admin stopped it, auto-submit current progress
  useEffect(() => {
    const check = async () => {
      if (submittedRef.current) return;
      if (participantRef.current?.phone === ADMIN_PHONE) return; // admin is never auto-submitted
      try {
        const res = await fetch("/api/quiz-status", { cache: "no-store" });
        const data = await res.json();
        if (!data.active) {
          const { answers, selectedAnswer } = stateRef.current;
          const final = selectedAnswer !== null ? [...answers, selectedAnswer] : answers;
          submitQuiz(final, true);
        }
      } catch {}
    };
    check();
    const t = setInterval(check, 5000);
    return () => clearInterval(t);
  }, [submitQuiz]);

  const handleSelect = (idx: number) => {
    if (submittedRef.current) return;
    setSelectedAnswer(idx);
  };

  const handleNext = useCallback(() => {
    if (selectedAnswer === null || submittedRef.current) return;
    const newAnswers = [...answers, selectedAnswer];

    if (currentQ < questions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setAnswers(newAnswers);
        setCurrentQ(currentQ + 1);
        setSelectedAnswer(null);
        setIsTransitioning(false);
      }, 300);
    } else {
      submitQuiz(newAnswers, false);
    }
  }, [selectedAnswer, answers, currentQ, submitQuiz]);

  const handleBack = () => {
    if (currentQ === 0 || submittedRef.current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      const prevAnswers = [...answers];
      const prevSelected = prevAnswers.pop() ?? null;
      setAnswers(prevAnswers);
      setCurrentQ(currentQ - 1);
      setSelectedAnswer(prevSelected);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" && selectedAnswer !== null && !isSaving) handleNext();
      const map: { [key: string]: number } = { a: 0, b: 1, c: 2, d: 3, "1": 0, "2": 1, "3": 2, "4": 3 };
      if (map[e.key.toLowerCase()] !== undefined) handleSelect(map[e.key.toLowerCase()]);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedAnswer, handleNext, isSaving]);

  if (!participantInfo) return null;

  const isLastQuestion = currentQ === questions.length - 1;

  return (
    <main className="min-h-screen bg-theme flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Auto-submit overlay */}
      {autoSubmitted && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{ background: "var(--bg)" }}
        >
          <div className="text-center max-w-sm">
            <div
              className="w-10 h-10 border-2 rounded-full animate-spin mx-auto mb-4"
              style={{ borderColor: "var(--gold)", borderTopColor: "transparent" }}
            />
            <h2 className="font-display text-xl font-bold text-primary mb-2">Quiz ended by admin</h2>
            <p className="text-secondary font-body text-sm">Submitting your answers so far...</p>
          </div>
        </div>
      )}

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 glow-blob opacity-60" />
        <div className="absolute bottom-0 left-0 w-80 h-80 glow-blob opacity-60" />
      </div>

      <div
        className={`w-full max-w-2xl relative z-10 transition-all duration-300 ${
          isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push("/")} className="text-muted hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <span className="text-secondary text-sm font-body">{participantInfo.name}</span>
          </div>
          <div className="font-mono text-gold text-sm font-medium">
            {currentQ + 1} <span className="text-muted">/ {questions.length}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--border-subtle)" }}>
            <div
              className="h-full rounded-full progress-fill"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
              }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  i < currentQ ? "dot-done" : i === currentQ ? "dot-current animate-pulse" : "dot-pending"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category badge */}
        <div className="flex items-center gap-3 mb-5">
          <span className="badge">{question.category}</span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        </div>

        {/* Question */}
        <div className="mb-8">
          <h1 className="font-display text-xl md:text-2xl font-bold text-primary leading-tight whitespace-pre-line">
            {question.question}
          </h1>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`option-card w-full flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected ? "option-selected" : "option-default"
                }`}
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold flex-shrink-0"
                  style={{
                    background: isSelected ? "var(--gold-border)" : "var(--border-subtle)",
                    color: isSelected ? "var(--gold)" : "var(--text-muted)",
                  }}
                >
                  {optionLabels[idx]}
                </span>
                <span className="font-body text-sm text-left flex-1 text-primary">{option}</span>
                {isSelected && (
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentQ === 0}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-body font-medium text-sm transition-all ${
              currentQ === 0 ? "text-faint cursor-not-allowed" : "text-secondary hover:text-gold"
            }`}
            style={currentQ === 0 ? {} : { border: "1px solid var(--border-subtle)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back
          </button>

          <p className="text-muted text-xs font-body">
            {selectedAnswer === null ? "Select an answer" : "You can change your answer"}
          </p>

          <button
            onClick={handleNext}
            disabled={selectedAnswer === null || isSaving}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm transition-all duration-300"
            style={
              selectedAnswer !== null && !isSaving
                ? { background: "var(--gold)", color: "#fff" }
                : { background: "var(--border-subtle)", color: "var(--text-faint)", cursor: "not-allowed" }
            }
          >
            {isSaving ? "Saving..." : isLastQuestion ? "Finish Quiz" : "Next Question"}
            {!isSaving && (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            )}
          </button>
        </div>

        <p className="text-center text-faint text-xs font-mono mt-6">
          Press 1-4 to select | Enter to continue
        </p>
      </div>
    </main>
  );
}