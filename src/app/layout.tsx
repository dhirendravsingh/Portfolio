import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
const inter = Inter({subsets : ["latin"],weight : ["400", "500", "600", "700", "800", "900"]})


export const metadata: Metadata = {
  title: "Dhirendra | Developer Portfolio",
  description: "This is a developer portfolio of Dhirendra Vikram Singh, showcasing skills, projects, and experience in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
    </ViewTransitions>
  );
}
