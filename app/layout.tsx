import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "PPC 2026 Quiz",
  description: "An elegant quiz on Panchayati Raj and Women Leadership",
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