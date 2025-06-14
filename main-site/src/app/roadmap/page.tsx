import Image from "next/image";

export const metadata = { title: "MutinAI • Roadmap" };

const milestones = [
  {
    date: "Months 0‑1",
    title: "Lightning MVP",
    body: "Governance‑Concierge MCP plugin live on Solana mainnet; read‑only feed + one‑click vote signing.",
    status: "active",
    icon: "/assets/anchor.png"
  },
  {
    date: "Months 2‑3",
    title: "Turbo Agent",
    body: "Multi‑realm monitoring, preference templates, first security audit.",
    status: "upcoming",
    icon: "/assets/telescope.png"
  },
  {
    date: "Months 4‑6",
    title: "Ecosystem Plug‑ins",
    body: "Embed in Realms UI, Phantom extension, Discord bots; AI‑drafted proposals & sentiment summaries.",
    status: "upcoming",
    icon: "/assets/compass.png"
  },
  {
    date: "Months 7‑12",
    title: "Autonomous Era",
    body: "AI delegate committees, routine treasury actions, cross‑chain expansion, launch Mutin AI DAO.",
    status: "future",
    icon: "/assets/lock.png"
  },
];

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-orange-500/5"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/assets/piratehat.png"
              alt="Pirate hat icon"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-6">
            Product Roadmap
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Shipping schedule—subject to on‑chain governance, not hand‑waving.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-orange-400 to-gray-300 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone) => (
                <div 
                  key={milestone.date} 
                  className={`relative flex gap-8 group ${
                    milestone.status === 'active' ? 'opacity-100' : 
                    milestone.status === 'upcoming' ? 'opacity-90' : 'opacity-75'
                  }`}
                >
                  {/* Timeline node */}
                  <div className="flex flex-col items-center">
                    <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
                      milestone.status === 'active' 
                        ? 'bg-blue-500 border-blue-200 shadow-lg shadow-blue-500/50' 
                        : milestone.status === 'upcoming'
                        ? 'bg-orange-400 border-orange-200 shadow-lg shadow-orange-400/50'
                        : 'bg-gray-400 border-gray-200 shadow-md'
                    } transition-all duration-300 group-hover:scale-110`}>
                      <Image
                        src={milestone.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="filter brightness-0 invert"
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pb-12">
                    <div className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 ${
                      milestone.status === 'active' 
                        ? 'border-blue-500' 
                        : milestone.status === 'upcoming'
                        ? 'border-orange-400'
                        : 'border-gray-300'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-sm uppercase tracking-wider font-semibold ${
                          milestone.status === 'active' 
                            ? 'text-blue-600' 
                            : milestone.status === 'upcoming'
                            ? 'text-orange-600'
                            : 'text-gray-500'
                        }`}>
                          {milestone.date}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          milestone.status === 'active' 
                            ? 'bg-blue-100 text-blue-700' 
                            : milestone.status === 'upcoming'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {milestone.status === 'active' ? 'In Progress' : 
                           milestone.status === 'upcoming' ? 'Upcoming' : 'Future'}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                        <Image 
                          src="/assets/piratehat.png" 
                          alt="" 
                          width={24} 
                          height={24} 
                          className="mr-3" 
                        />
                        {milestone.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">{milestone.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Progress Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Progress Overview</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-gray-600">Overall Progress</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">1</div>
              <div className="text-gray-600">Active Milestone</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-gray-600">Upcoming Features</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-gray-600 mb-2">12</div>
              <div className="text-gray-600">Months Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the revolution in DAO governance. Follow our progress and contribute to the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/product"
              className="inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg hover:bg-orange-400 transition-all duration-200"
            >
              Try the MVP
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
