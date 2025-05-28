"use client";
import { useState } from "react";

const faqs = [
  { q: "Is Mutin AI custodial?", a: "No. The plugin builds vote transactions locally; your private key stays in your wallet." },
  { q: "What wallets are supported?", a: "Any Solana wallet that can sign and send raw base64 transactions—Phantom, Backpack, Solflare, Ledger." },
  { q: "How does the AI read proposals?", a: "We pull Realm accounts via RPC, decode description Markdown, and feed it to GPT‑4o for summarisation." },
  { q: "Can the AI vote without my approval?", a: "Only if you enable auto‑broadcast in settings. By default, each vote waits for your signature." },
  { q: "What are the fees?", a: "Just Solana network fees (≈0.000005 SOL). Mutin AI takes no cut." },
  { q: "When will multi‑chain support arrive?", a: "Months 4‑6 in the roadmap—Snapshot & Cosmos Gov adapters are already in R&D." },
];

export default function FAQClient() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto py-16 space-y-8">
      <h1 className="text-4xl font-extrabold text-blue-900 text-center">FAQ</h1>
      {faqs.map((item, i) => (
        <div key={item.q} className="border-b border-gray-200 py-4">
          <button
            className="flex w-full justify-between text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-medium text-blue-900">{item.q}</span>
            <span className="text-orange-500">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <p className="mt-3 text-gray-600 text-sm">{item.a}</p>
          )}
        </div>
      ))}
    </section>
  );
}
