"use client";

import { useState, useEffect } from "react";
import type { Reflection, QuestionSection } from "@/lib/types";

const STORAGE_KEY = "self-reflection-results";

function getStoredResult(reflectionId: string): Record<string, string | string[]> | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const data = JSON.parse(stored) as Record<string, { answers: Record<string, string | string[]> }>;
    return data[reflectionId]?.answers ?? null;
  } catch {
    return null;
  }
}

function saveResult(reflectionId: string, answers: Record<string, string | string[]>) {
  if (typeof window === "undefined") return;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const data = stored ? JSON.parse(stored) : {};
    data[reflectionId] = {
      date: new Date().toISOString(),
      answers,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore storage errors
  }
}

interface ReflectionFormProps {
  reflection: Reflection;
}

export default function ReflectionForm({ reflection }: ReflectionFormProps) {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = getStoredResult(reflection.id);
    if (saved && Object.keys(saved).length > 0) {
      setAnswers(saved);
    }
  }, [reflection.id]);

  const updateAnswer = (sectionId: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [sectionId]: value }));
  };

  const handleSingleSelect = (sectionId: string, optionId: string) => {
    updateAnswer(sectionId, optionId);
  };

  const handleMultipleToggle = (sectionId: string, optionId: string) => {
    setAnswers((prev) => {
      const current = (prev[sectionId] as string[]) || [];
      const newValue = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      return { ...prev, [sectionId]: newValue };
    });
  };

  const handleTextChange = (sectionId: string, value: string) => {
    updateAnswer(sectionId, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveResult(reflection.id, answers);
    setSubmitted(true);
  };

  const renderSection = (section: QuestionSection) => {
    const value = answers[section.id];

    if (section.type === "text") {
      return (
        <div key={section.id} className="mt-4">
          <label className="mb-2 block text-[#5c4a47]">{section.prompt}</label>
          <textarea
            value={(value as string) || ""}
            onChange={(e) => handleTextChange(section.id, e.target.value)}
            placeholder={section.placeholder}
            className="w-full rounded-2xl border-2 border-[#e8e0ff] bg-[#fff9f5] px-4 py-3 text-[#5c4a47] placeholder-[#9d8f8c] focus:border-[#9b8bf5] focus:outline-none focus:ring-2 focus:ring-[#9b8bf5]/30"
            rows={3}
          />
        </div>
      );
    }

    if (section.type === "multiple") {
      return (
        <div key={section.id} className="mt-4 space-y-3">
          <p className="text-[#5c4a47]">{section.prompt}</p>
          <div className="space-y-2">
            {section.options?.map((opt) => {
              const isSelected = (value as string[] || []).includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleMultipleToggle(section.id, opt.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left transition-all ${
                    isSelected
                      ? "border-[#9b8bf5] bg-[#e8e0ff]"
                      : "border-[#e8e0ff] bg-white hover:border-[#c8f0e8]"
                  }`}
                >
                  <span className="text-xl">{opt.emoji || "☐"}</span>
                  <span className="text-[#5c4a47]">{opt.label}</span>
                  {isSelected && <span className="ml-auto">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    // single choice
    return (
      <div key={section.id} className="mt-4 space-y-2">
        <p className="text-[#5c4a47]">{section.prompt}</p>
        <div className="space-y-2">
          {section.options?.map((opt) => {
            const isSelected = value === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSingleSelect(section.id, opt.id)}
                className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left transition-all ${
                  isSelected
                    ? "border-[#9b8bf5] bg-[#e8e0ff]"
                    : "border-[#e8e0ff] bg-white hover:border-[#c8f0e8]"
                }`}
              >
                <span className="text-xl">{opt.emoji || "⭕"}</span>
                <span className="text-[#5c4a47]">{opt.label}</span>
                {isSelected && <span className="ml-auto">✓</span>}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border-2 border-[#c8f0e8] bg-[#e8faf6] p-8 text-center">
        <p className="mb-4 text-6xl">🎉</p>
        <h2 className="mb-2 text-2xl font-bold text-[#5c4a47]">
          Great job, Oliver!
        </h2>
        <p className="text-[#7d6b68]">
          You did an amazing job thinking about your day. Keep it up! ⭐
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-2xl bg-[#9b8bf5] px-6 py-3 font-bold text-white transition-colors hover:bg-[#7d6bf0]"
        >
          Back to reflections
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {reflection.questions.map((question) => (
        <div
          key={question.id}
          className="rounded-3xl border-2 border-[#e8e0ff] bg-white p-6 card-soft"
        >
          <h2 className="mb-4 text-xl font-bold text-[#5c4a47]">
            {question.emoji} {question.title}
          </h2>
          {question.sections.map((section) => renderSection(section))}
        </div>
      ))}

      <div className="flex justify-center">
        <button
          type="submit"
          className="rounded-2xl bg-[#9b8bf5] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#7d6bf0]"
        >
          ✨ I&apos;m done! ✨
        </button>
      </div>
    </form>
  );
}
