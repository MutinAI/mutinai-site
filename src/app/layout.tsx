import "./globals.css";
import Link from "next/link";

export const metadata = { title: "MutinAI" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Nav bar */}
        <header className="border-b border-gray-200 bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
            {/* brand */}
            <Link href="/" className="flex items-center">
            <img src="/assets/topleft.png" alt="MutinAI logo" className="h-8 w-auto" />
            </Link>

            {/* links */}
            <div className="space-x-6 text-sm font-medium text-blue-900">
              <Link href="/product">Product</Link>
              <Link href="/docs">Docs</Link>
              <Link href="/whitepaper">White Paper</Link>
              <Link href="/roadmap">Roadmap</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl p-4">{children}</main>

        <footer className="border-t border-gray-200 p-6 text-center text-xs text-gray-500 space-y-4">
          <img src="/assets/waves.png" alt="" className="mx-auto h-4" />
          <div>© {new Date().getFullYear()} MutinAI</div>
        </footer>
      </body>
    </html>
  );
}
