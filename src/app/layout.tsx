import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";



const jetbrains = JetBrains_Mono({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "V2",
  description: "Trading SuperCharged",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrains.className}>{children}</body>
    </html>
  );
}
