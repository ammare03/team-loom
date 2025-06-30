import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./app.css";
import DashboardWrapper from "./DashboardWrapper";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeamLoom",
  description: "A Project Management Tool for Teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
