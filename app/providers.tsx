"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <SessionProvider>{children}</SessionProvider>
      </>
    );
  }

  return (
    <>
      <SessionProvider>
        <ThemeProvider
          enableSystem={false}
          enableColorScheme={false}
          attribute="class"
        >
          {children}
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
