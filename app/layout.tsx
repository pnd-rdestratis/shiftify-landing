import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linetrace",
  description: "Digital Shift Documentation for Production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
