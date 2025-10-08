import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import type { PropsWithChildren } from "react";

import { siteConfig } from "@/config";
import { ThemeProvider } from "./provider";

import "./globals.css";

// ✅ Load DM Sans with variable
const dmSansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const viewport: Viewport = {
  themeColor: "#000319",
  colorScheme: "dark",
};

export const metadata: Metadata = siteConfig;

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en" className={`${dmSansFont.variable} font-dm-sans`}>
      {/* ✅ attach variable + Tailwind class */}
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
