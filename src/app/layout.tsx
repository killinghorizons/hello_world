import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello World!",
  description: "Hello World! in every programming languages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-light-foreground bg-light-background dark:text-dark-foreground dark:bg-dark-background font-sans`}
      >
        <ThemeProvider enableSystem defaultTheme="system" attribute="class">
          <div className="">
            <Nav />
            <main className="min-h-screen py-10">
              <div className="max-w-3xl mx-auto px-5">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
