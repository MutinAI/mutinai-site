/* Vercel deployment test - this ensures fresh build */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 py-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Left content */}
        <div className="space-y-8 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            MutinAI: Revolutionizing Solana Governance
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            An open-source MCP plugin that empowers AI agents to participate in DAO governance. 
            Let our tireless AI delegate read proposals, provide clear explanations, and cast 
            on-chain votes on your behalf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/product"
              className="inline-block rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 text-center"
            >
              Explore the Product
            </Link>
            <Link
              href="/whitepaper"
              className="inline-block rounded-xl border-2 border-blue-900 px-8 py-4 font-semibold text-blue-900 hover:bg-blue-50 transition-all duration-200 text-center"
            >
              Read Whitepaper
            </Link>
          </div>
        </div>

        {/* Right mascot */}
        <div className="relative w-full max-w-md">
          <Image
            src="/assets/single.png"
            alt="MutinAI mascot"
            width={420}
            height={420}
            priority
            className="drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose MutinAI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-600">Advanced AI algorithms analyze proposals and provide clear, unbiased explanations.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Automated Voting</h3>
              <p className="text-gray-600">Seamless on-chain voting integration with your Solana wallet.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Community Driven</h3>
              <p className="text-gray-600">Open-source platform built for and by the Solana community.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
