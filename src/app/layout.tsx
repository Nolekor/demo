import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Anybody, Raleway } from "next/font/google";
import { BlogProvider } from "@/hook/useContext";

const anybody = Anybody({ subsets: ["latin"], variable: "--font-anybody" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Demo",
  description: "Demo for Interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anybody.variable} ${raleway.variable} font-anyway`}>
        <BlogProvider>
          <Header />
          {children}
        </BlogProvider>
      </body>
    </html>
  );
}
