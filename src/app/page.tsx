import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 py-16">
      {/* left copy */}
      <div className="space-y-6 max-w-lg">
        <h1 className="text-5xl font-extrabold text-blue-900">MutinAI</h1>
        <p className="text-lg text-gray-600">
          Governance concierge that reads, summarizes, and queues your DAO votes — privately.
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
        src="/assets/mainasset.png"
        alt="MutinAI mascot"
        width={420}
        height={420}
        priority
      />
    </section>
  );
}
