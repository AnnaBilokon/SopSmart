import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SopSmart",
  description: "Smart sorting for a sustainable future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-emerald-50/30 text-slate-900"}>
        <div className="mx-auto max-w-6xl px-4">{children}</div>
      </body>
    </html>
  );
}
