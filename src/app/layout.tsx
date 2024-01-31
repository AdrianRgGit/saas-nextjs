import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav/SideNav";

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  title: "Home",
  description: "Saas info",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arimo.className} flex h-[95vh] gap-x-12 p-4`}>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
