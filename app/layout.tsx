import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shiftify",
  description: "Digital Shift Documentation for Production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
