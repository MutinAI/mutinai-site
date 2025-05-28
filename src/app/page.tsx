import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 py-16">
      {/* left copy */}
      <div className="space-y-6 max-w-lg">
      <h1 className="text-5xl font-extrabold text-blue-900">
  Mutin AI: AI Agents for Solana Governance
</h1>
<p className="text-lg text-gray-600">
  Open‑source MCP plugin that lets a tireless AI delegate read proposals,
  explain them, and cast on‑chain votes for you.
</p>
        <Link
          href="/product"
          className="inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-md hover:bg-orange-400"
        >
          Explore the product
        </Link>
      </div>

      {/* right mascot */}
      <Image
        src="/assets/single.png"
        alt="MutinAI mascot"
        width={420}
        height={420}
        priority
      />
    </section>
  );
}
