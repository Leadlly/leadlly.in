import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Import Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en">
      {/* Apply the Montserrat font */}
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
