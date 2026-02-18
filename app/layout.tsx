import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onifade Ololade Favour - Frontend Developer/Fullsatck Developer Portfolio",
  description: "Portfolio of Onifade Ololade, a passionate frontend developer specializing in React.js, Next.js, Node.js, Express.js ,Supabase, Mongodb, Typescript and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col lg:flex-row gap-8 p-4 lg:p-8">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            <Navigation />
            <div className="flex-1 mt-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
