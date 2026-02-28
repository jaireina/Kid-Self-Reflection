import Link from "next/link";
import { notFound } from "next/navigation";
import { reflections } from "@/lib/reflections";
import ReflectionForm from "./ReflectionForm";

export default async function ReflectionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const reflection = reflections.find((r) => r.id === id);

  if (!reflection) {
    notFound();
  }

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff9f5] via-[#fef7f5] to-[#f5f0ff]">
      <div className="mx-auto max-w-2xl px-6 py-8">
        {/* Back link */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-[#7d6b68] transition-colors hover:text-[#5c4a47]"
        >
          <span>←</span> Back to reflections
        </Link>

        {/* Header */}
        <header className="mb-8 rounded-3xl border-2 border-[#e8e0ff] bg-white p-6 card-soft">
          <h1 className="mb-2 text-3xl font-bold text-[#5c4a47]">
            {reflection.emoji} {reflection.title} {reflection.emoji}
          </h1>
          <p className="mb-4 text-[#7d6b68]">
            (For kids – be honest, this is not a test to get in trouble)
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="rounded-xl bg-[#ffe4d4] px-3 py-1.5 font-medium text-[#5c4a47]">
              Name: Oliver ✏️
            </span>
            <span className="rounded-xl bg-[#d4edff] px-3 py-1.5 font-medium text-[#5c4a47]">
              Date: {today} 📅
            </span>
          </div>
        </header>

        {/* Form */}
        <ReflectionForm reflection={reflection} />
      </div>
    </div>
  );
}
