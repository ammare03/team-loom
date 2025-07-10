import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./app.css";
import DashboardWrapper from "./DashboardWrapper";
import { ORIGIN_URL } from "@/lib/helpers";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeamLoom",
  description: "A Project Management Tool for Teams | Created by Ammar",
  openGraph: {
    images: [
      {
        url: "./banner.png",
      },
    ],
  },
  metadataBase: new URL(ORIGIN_URL),
  alternates: {
    canonical: ORIGIN_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body className={`${rubik.className} antialiased`}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
