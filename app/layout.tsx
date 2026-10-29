import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "PPC 2026 Quiz",
  description: "National Workshop on People's Plan Campaign (PPC) 2026–27",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}