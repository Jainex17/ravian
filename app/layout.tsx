import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravian AI",
  description: "Ravian AI is a data science platform that helps you analyze your data and uncover valuable insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ThemeProvider>
  );
}
