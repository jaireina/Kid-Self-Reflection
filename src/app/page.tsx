import Link from "next/link";
import { reflections } from "@/lib/reflections";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff9f5] via-[#fef7f5] to-[#f5f0ff]">
      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-[#5c4a47]">
            🌟 My Self-Reflection 🌟
          </h1>
          <p className="text-lg text-[#7d6b68]">
            Hi Oliver! 👋 Pick a reflection to complete
          </p>
        </header>

        {/* Reflection Cards */}
        <div className="space-y-6">
          {reflections.map((reflection) => (
            <Link
              key={reflection.id}
              href={`/reflection/${reflection.id}`}
              className="block transition-all duration-200"
            >
              <div className="card-soft card-hover rounded-3xl border-2 border-[#e8e0ff] bg-white p-6 transition-all duration-200">
                <div className="flex items-start gap-4">
                  <span className="text-5xl" role="img" aria-hidden>
                    {reflection.emoji}
                  </span>
                  <div className="flex-1">
                    <h2 className="mb-2 text-xl font-bold text-[#5c4a47]">
                      {reflection.title}
                    </h2>
                    <p className="text-[#7d6b68]">{reflection.description}</p>
                    <p className="mt-3 text-sm font-medium text-[#9b8bf5]">
                      Start reflection →
                    </p>
                  </div>
                  <span className="text-2xl" role="img" aria-hidden>
                    ➡️
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-sm text-[#9d8f8c]">
          Be honest – this is not a test! 😊
        </p>
      </div>
    </div>
  );
}
