import "./globals.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const metadata = { title: "MutinAI" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Sticky Nav bar */}
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur shadow-sm">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
            {/* brand */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/topleft.png" alt="MutinAI logo" width={36} height={36} className="h-9 w-auto" />
              <span className="text-xl font-bold tracking-tight text-blue-900">MutinAI</span>
            </Link>

            {/* links */}
            <div className="hidden md:flex space-x-8 text-base font-medium text-blue-900 items-center">
              <Link href="/product" className="hover:text-orange-500 transition">Product</Link>
              <Link href="/docs" className="hover:text-orange-500 transition">Docs</Link>
              <Link href="/whitepaper" className="hover:text-orange-500 transition">White Paper</Link>
              <Link href="/roadmap" className="hover:text-orange-500 transition">Roadmap</Link>
              <Link href="/faq" className="hover:text-orange-500 transition">FAQ</Link>
              <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
            </div>
            {/* CTA button */}
            <Link
              href="/product"
              className="ml-6 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-2 text-white font-semibold shadow hover:from-orange-400 hover:to-orange-300 transition hidden md:inline-block"
            >
              Launch App
            </Link>
            {/* Mobile menu placeholder (optional for future) */}
          </nav>
        </header>

        <main className="mx-auto max-w-7xl p-4 min-h-[80vh]">{children}</main>

        <footer className="border-t border-gray-200 bg-gray-50 py-8 text-center text-xs text-gray-500 space-y-4">
          <Image src="/assets/waves.png" alt="" width={100} height={16} className="mx-auto h-4" />
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-600">
            <span>© {new Date().getFullYear()} MutinAI</span>
            <span className="hidden md:inline">|</span>
            <a href="mailto:contact@mutinai.com" className="hover:text-blue-900 font-medium">Contact</a>
            <a href="https://twitter.com/MutinAIMCP" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 font-medium">Twitter</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
