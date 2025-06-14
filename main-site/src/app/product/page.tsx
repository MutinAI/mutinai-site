import Image from "next/image";
import Link from "next/link";
import RopeDivider from "@/components/RopeDivider";

export const metadata = { title: "MutinAI • Product" };

export default function Product() {
  return (
    <section className="space-y-24">
      {/* hero */}
      <header className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
        <div className="space-y-6 max-w-lg">
          <h1 className="text-4xl font-extrabold text-blue-900">
            Hands‑free DAO participation
          </h1>
          <p className="text-gray-600">
            Mutin AI lowers civic‑engagement friction by pairing Solana’s
            low‑cost governance with an AI that watches, summarises, and queues
            your votes.
          </p>
          <Link
            href="/docs"
            className="inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-md hover:bg-orange-400"
          >
            Read the docs
          </Link>
        </div>

        <Image
          src="/assets/single.png"
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
            Token‑holders miss proposals and DAOs struggle for quorum.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8">Our solution</h2>
          <p className="text-gray-600">
            An MCP‑connected agent fetches Realms proposals, distils discussion,
            and submits a wallet‑signed <code>CastVote</code> transaction—human
            intent, machine speed.
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

      {/* feature grid with individual icons */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          [
            "/assets/piratehat.png",
            "AI Summaries",
            "GPT‑4o distills every proposal into actionable bullets.",
          ],
          [
            "/assets/lock.png",
            "Private Signing",
            "Transactions built locally—your key never leaves device.",
          ],
          [
            "/assets/telescope.png",
            "Telescope Watchlist",
            "Track delegates you trust; mute the rest.",
          ],
          [
            "/assets/anchor.png",
            "Ledger‑grade Security",
            "Hardware‑wallet flow out of the box.",
          ],
        ].map(([src, title, body]) => (
          <div
            key={title}
            className="rounded-xl border border-gray-200 p-6 space-y-4 shadow-sm hover:shadow-lg transition"
          >
            <img src={src as string} alt="" className="h-12 w-12" />
            <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
            <p className="text-gray-600 text-sm">{body}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
