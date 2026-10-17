import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import AgentNetwork from "@/components/AgentNetwork";
import SpotlightCards from "@/components/SpotlightCards";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Syam Sundar Akina | AI Engineer & Data Scientist",
  description:
    "AI Engineer and Data Scientist in Dallas, TX. Production LLM applications, multi-agent systems, RAG, and machine learning.",
  openGraph: {
    title: "Syam Sundar Akina | AI Engineer & Data Scientist",
    description: "Production LLM applications, multi-agent systems, RAG, and machine learning.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#050505" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        {/* page-wide ambience behind every section */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="ambient-grid absolute inset-0" />
          <AgentNetwork />
          <div className="orb left-[-10vw] top-[10vh] h-[40vw] w-[40vw] bg-white/[0.035] [animation:orb-a_28s_ease-in-out_infinite]" />
          <div className="orb bottom-[-10vh] right-[-10vw] h-[36vw] w-[36vw] bg-accent/[0.05] [animation:orb-b_34s_ease-in-out_infinite]" />
        </div>
        <SpotlightCards />
        {children}
      </body>
    </html>
  );
}
