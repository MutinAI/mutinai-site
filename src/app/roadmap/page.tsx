import Image from "next/image";

export const metadata = { title: "MutinAI • Roadmap" };

const milestones = [
  {
    date: "Months 0‑1",
    title: "Lightning MVP",
    body: "Governance‑Concierge MCP plugin live on Solana mainnet; read‑only feed + one‑click vote signing.",
  },
  {
    date: "Months 2‑3",
    title: "Turbo Agent",
    body: "Multi‑realm monitoring, preference templates, first security audit.",
  },
  {
    date: "Months 4‑6",
    title: "Ecosystem Plug‑ins",
    body: "Embed in Realms UI, Phantom extension, Discord bots; AI‑drafted proposals & sentiment summaries.",
  },
  {
    date: "Months 7‑12",
    title: "Autonomous Era",
    body: "AI delegate committees, routine treasury actions, cross‑chain expansion, launch Mutin AI DAO.",
  },
];


export default function Roadmap() {
  return (
    <section className="max-w-4xl mx-auto space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold">Product Roadmap</h1>
        <p className="text-gray-400">
          Shipping schedule—subject to on‑chain governance, not hand‑waving.
        </p>
      </header>

      <div className="relative border-l border-transparent">
        {milestones.map((m, idx) => (
          <div key={m.date} className="flex gap-6 mb-12">
            {/* divider */}
            <div className="flex flex-col items-center">
              <div className="h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-black" />
              {idx < milestones.length - 1 && (
                <Image
                  src="/divider.svg"
                  alt=""
                  width={4}
                  height={160}
                  className="select-none"
                />
              )}
            </div>

            {/* card */}
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider text-gray-400">
                {m.date}
              </h3>
              <h2 className="text-xl font-semibold">{m.title}</h2>
              <p className="text-gray-400">{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
