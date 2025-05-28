import "./globals.css";
import Link from "next/link";

export const metadata = { title: "MutinAI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <Link href="/" className="flex items-center">
  <img src="/logo.png" alt="MutinAI logo" className="h-8 w-auto" />
  <span className="text-2xl font-bold">MutinAI</span>
</Link>
            <div className="space-x-6 text-sm font-medium text-blue-900">
              <Link href="/product">Product</Link>
              <Link href="/docs">Docs</Link>
              <Link href="/token">Token</Link>
              <Link href="/roadmap">Roadmap</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl p-4">{children}</main>

        <footer className="border-t border-gray-800 p-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} MutinAI • <Link href="/contact">Contact</Link>
        </footer>
      </body>
    </html>
  );
}
