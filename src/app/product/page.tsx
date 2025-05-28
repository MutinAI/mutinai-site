import Image from "next/image";
import RopeDivider from "@/components/RopeDivider";
import Link from "next/link";

export const metadata = { title: "MutinAI • Product" };

export default function Product() {
  return (
    <section className="space-y-24">
      {/* hero */}
      <header className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
        <div className="space-y-6 max-w-lg">
          <h1 className="text-4xl font-extrabold text-blue-900">Your DAO Governance Concierge</h1>
          <p className="text-gray-600">
            MutinAI reads proposals, writes a 5‑bullet summary, and hands you a ready‑to‑send
            vote transaction—no key sharing, no spam.
          </p>
          <Link
            href="/docs"
            className="inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-md hover:bg-orange-400"
          >
            Read the docs
          </Link>
        </div>

        <Image
          src="/assets/mainasset.png"
          alt="MutinAI mascot"
          width={380}
          height={380}
          priority
        />
      </header>

      {/* problem / solution */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-900">The problem</h2>
          <p className="text-gray-600">
            Fast‑moving DAOs push a dozen proposals a week. Most holders
            either vote blind or skip entirely.
          </p>
          <h2 className="text-2xl font-bold text-blue-900 mt-8">Our solution</h2>
          <p className="text-gray-600">
            An AI agent that does the reading for you, explains the intent in plain English,
            and queues your preferred vote—ready for one‑tap broadcast.
          </p>
        </div>

        <Image
          src="/assets/compass.png"
          alt="Compass icon"
          width={300}
          height={300}
        />
      </div>

      {/* rope divider */}
      <RopeDivider />

      {/* feature grid with pirate icons */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          ["/assets/icons.png#xywh=0,0,384,384", "AI Summaries", "GPT‑4o distills every proposal into actionable bullets."],
          ["/assets/icons.png#xywh=384,0,384,384", "Private Signing", "Transactions built locally—your key never leaves device."],
          ["/assets/icons.png#xywh=0,384,384,384", "Telescope Watchlist", "Track delegates you trust; mute the rest."],
          ["/assets/icons.png#xywh=384,384,384,384", "Ledger‑grade Security", "Hardware‑wallet flow out of the box."],
        ].map(([src, title, body]) => (
          <div key={title} className="rounded-xl border border-gray-200 p-6 space-y-4 shadow-sm hover:shadow-lg transition">
            <img src={src as string} alt="" className="h-12 w-12" />
            <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
            <p className="text-gray-600 text-sm">{body}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
