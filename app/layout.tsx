import type { Metadata } from "next";
import { Afacad_Flux, Fira_Code, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CodeLayout from "@/components/Layout/CodeLayout";
import { Analytics } from "@vercel/analytics/react"

const fontCode = Fira_Code({
  variable: "--font-main",
  subsets: ["latin"],
});

const fontContent = Plus_Jakarta_Sans({
  variable: "--font-content",
  subsets: ["latin"],
});

const fontContent2 = Afacad_Flux({
  variable: "--font-content2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "imesh nimsitha's portfolio",
  description:
    "Imesh Nimsitha's Personal Portfolio for Software Development, Graphic Design, and More",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontContent.variable} ${fontContent2.variable} ${fontCode.variable} antialiased scroll-smooth`}
      >
        <CodeLayout>{children}</CodeLayout>
        <Analytics />
      </body>
    </html>
  );
}
