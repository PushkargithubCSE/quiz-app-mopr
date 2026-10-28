"use client";

import { useTheme } from "@/lib/theme-context";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:scale-105"
      style={{
        background: isLight ? "rgba(26,26,46,0.08)" : "rgba(212,168,83,0.1)",
        border: isLight ? "1px solid rgba(26,26,46,0.15)" : "1px solid rgba(212,168,83,0.3)",
      }}
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      {/* Track */}
      <div
        className="relative w-10 h-5 rounded-full transition-all duration-300"
        style={{ background: isLight ? "rgba(26,26,46,0.15)" : "rgba(212,168,83,0.2)" }}
      >
        {/* Thumb */}
        <div
          className="absolute top-0.5 w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center"
          style={{
            left: isLight ? "calc(100% - 18px)" : "2px",
            background: isLight ? "#1A1A2E" : "#D4A853",
          }}
        >
          {isLight ? (
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.752 15.002A9.718 9.718 0 0118 15.75 9.75 9.75 0 018.25 6a9.718 9.718 0 01.247-2.252A9.756 9.756 0 003 12c0 5.385 4.365 9.75 9.75 9.75 4.132 0 7.686-2.57 9.002-6.248z" />
            </svg>
          ) : (
            <svg className="w-2.5 h-2.5 text-ink" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          )}
        </div>
      </div>

      {/* Label */}
      <span
        className="text-xs font-mono hidden sm:block"
        style={{ color: isLight ? "rgba(26,26,46,0.5)" : "rgba(212,168,83,0.6)" }}
      >
        {isLight ? "Light" : "Dark"}
      </span>
    </button>
  );
}