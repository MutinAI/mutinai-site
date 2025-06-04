import Image from "next/image";

export const metadata = { title: "MutinAI • White Paper" };

export default function WhitePaper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-orange-500/5"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/assets/compass.png"
              alt="Compass icon"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-6">
            MutinAI White Paper
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            A comprehensive guide to AI-powered DAO governance on Solana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/assets/whitepaper.html"
              target="_blank"
              className="inline-block rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Read Full Paper
            </a>
            <a
              href="/assets/Mutin AI White Paper (2).docx"
              download
              className="inline-block rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Image src="/assets/anchor.png" alt="" width={24} height={24} className="mr-3" />
                <h3 className="text-lg font-semibold text-blue-900">1. Executive Summary</h3>
              </div>
              <p className="text-gray-600">Overview of MutinAI&apos;s vision for AI-powered DAO governance</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Image src="/assets/telescope.png" alt="" width={24} height={24} className="mr-3" />
                <h3 className="text-lg font-semibold text-blue-900">2. Problem Statement</h3>
              </div>
              <p className="text-gray-600">Current challenges in DAO governance and participation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Image src="/assets/single.png" alt="" width={24} height={24} className="mr-3" />
                <h3 className="text-lg font-semibold text-blue-900">3. Solution Architecture</h3>
              </div>
              <p className="text-gray-600">Technical implementation of AI agents and MCP integration</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Image src="/assets/lock.png" alt="" width={24} height={24} className="mr-3" />
                <h3 className="text-lg font-semibold text-blue-900">4. Security & Trust</h3>
              </div>
              <p className="text-gray-600">Ensuring secure and trustworthy AI-powered voting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Innovations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src="/assets/compass.png" alt="" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-600">Advanced AI algorithms analyze proposals and provide clear, unbiased explanations for informed decision-making.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src="/assets/anchor.png" alt="" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Seamless Integration</h3>
              <p className="text-gray-600">Native integration with Solana ecosystem and popular DAO platforms through MCP plugin architecture.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src="/assets/lock.png" alt="" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Secure & Transparent</h3>
              <p className="text-gray-600">Open-source implementation with robust security measures and full transparency in AI decision-making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize DAO Governance?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the future of decentralized decision-making with AI-powered governance tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/product"
              className="inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg hover:bg-orange-400 transition-all duration-200"
            >
              Explore Product
            </a>
            <a
              href="/contact"
              className="inline-block rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
