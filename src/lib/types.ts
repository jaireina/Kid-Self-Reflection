export type QuestionType = "single" | "multiple" | "text";

export interface QuestionOption {
  id: string;
  label: string;
  emoji?: string;
}

export interface QuestionSection {
  id: string;
  prompt: string;
  type: QuestionType;
  options?: QuestionOption[];
  placeholder?: string;
}

export interface ReflectionQuestion {
  id: string;
  title: string;
  emoji: string;
  sections: QuestionSection[];
}

export interface Reflection {
  id: string;
  title: string;
  emoji: string;
  description: string;
  questions: ReflectionQuestion[];
}

export interface ReflectionAnswer {
  sectionId: string;
  value: string | string[];
}
