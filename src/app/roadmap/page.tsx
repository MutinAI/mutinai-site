import Image from "next/image";

export const metadata = { title: "MutinAI • Roadmap" };

const milestones = [
  {
    date: "Q4 2025",
    title: "MVP Launch",
    body: "Governance‑Concierge MCP plugin v0.1: Realms pull, AI summaries, vote‑queue B64 export.",
  },
  {
    date: "Q1 2026",
    title: "Wallet Integrations",
    body: "One‑tap broadcast from Phantom & Backpack; push‑notification flow.",
  },
  {
    date: "Q2 2026",
    title: "Web Dashboard",
    body: "Live proposal feed, voting history, per‑realm analytics, dark/light themes.",
  },
  {
    date: "Q3 2026",
    title: "Cross‑Chain Support",
    body: "Snapshot (EVM/L2) + Cosmos Gov adapters; unified interface.",
  },
  {
    date: "Q4 2026",
    title: "Staking Incentives",
    body: "Delegate MUT to node operators that run concierge relayers; earn fee rebates.",
  },
  {
    date: "H1 2027",
    title: "Sentiment Analytics",
    body: "LLM clustering of proposal categories; predict pass/fail probability.",
  },
  {
    date: "H2 2027",
    title: "Treasury Risk AI",
    body: "Monitor DAO treasuries, surface yield & risk alerts to delegates.",
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
