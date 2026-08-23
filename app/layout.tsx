import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HandyHub - Home Services Marketplace",
  description: "Connect with trusted service providers for home repairs, cleaning, plumbing, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
