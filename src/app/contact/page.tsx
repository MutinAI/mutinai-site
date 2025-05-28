export const metadata = { title: "MutinAI • Contact" };

export default function Contact() {
  return (
    <section className="max-w-md mx-auto py-16 space-y-8 text-center">
      <h1 className="text-3xl font-extrabold text-blue-900">Join our community</h1>

      <p className="text-gray-600">
        Questions, feature ideas, or governance chat—hang out with us on Discord.
      </p>

      <a
        href="https://discord.gg/YOUR‑INVITE"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-indigo-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
        Join Discord
      </a>
    </section>
  );
}
