import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Posei UI - Store",
  description: "A melhor experiência mobile-first",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}