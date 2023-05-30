"use client";

import { FC } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./theme-provider";

interface providersProps {
  children: React.ReactNode;
}

const Providers: FC<providersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>{children} </SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
