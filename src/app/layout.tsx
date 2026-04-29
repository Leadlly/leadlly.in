import type { Metadata } from "next";
import { Montserrat, MuseoModerno } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

// Import Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Leadlly",
  description:
    "Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${museoModerno.variable} antialiased custom-scroll`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
