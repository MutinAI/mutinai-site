export default function Home() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold">MutinAI</h1>
      <p className="mt-4 max-w-xl text-lg text-gray-400">
        Governance concierge that reads, summarizes, and queues your DAO votes—privately.
      </p>
      <a
        href="/product"
        className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500"
      >
        Learn more
      </a>
    </section>
  );
}
