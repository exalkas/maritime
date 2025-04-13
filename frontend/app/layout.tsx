import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maritime SAAS - Ship Tracking & Management",
  description: "Comprehensive maritime management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">Maritime SAAS</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="hover:text-blue-200 font-medium">
                  Dashboard
                </Link>
                <Link href="/vessels" className="hover:text-blue-200">
                  Vessels
                </Link>
                <Link href="/routes" className="hover:text-blue-200">
                  Routes
                </Link>
                <Link href="/weather" className="hover:text-blue-200">
                  Weather
                </Link>
                <Link href="/cargo" className="hover:text-blue-200">
                  Cargo
                </Link>
              </nav>
              <div className="flex items-center space-x-4">
                <button className="bg-blue-700 hover:bg-blue-600 py-1 px-3 rounded text-sm">
                  Login
                </button>
              </div>
            </div>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className="bg-gray-800 text-white p-4 mt-auto">
            <div className="container mx-auto text-center text-sm">
              <p>© 2023 Maritime SAAS - All Rights Reserved</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
