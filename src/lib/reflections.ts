import type { Reflection } from "./types";

export const reflections: Reflection[] = [
  {
    id: "morning",
    title: "My Morning Self-Reflection",
    emoji: "🌟",
    description: "Be honest – this is not a test to get in trouble!",
    questions: [
      {
        id: "q1",
        title: "Getting Ready in the Morning",
        emoji: "1️⃣",
        sections: [
          {
            id: "q1s1",
            prompt: "What did I do well? (circle all that are true)",
            type: "multiple",
            options: [
              { id: "a", label: "I woke up and read my book", emoji: "✅" },
              { id: "b", label: "I cleaned the mess I made", emoji: "✅" },
              { id: "c", label: "I turned off my music when asked", emoji: "✅" },
              { id: "d", label: "I ate my breakfast", emoji: "✅" },
              { id: "e", label: "I took my plate to the sink", emoji: "✅" },
            ],
          },
          {
            id: "q1s2",
            prompt: "What could I do better next time?",
            type: "single",
            options: [
              { id: "a", label: "Make less mess", emoji: "⭕" },
              { id: "b", label: "Clean faster", emoji: "⭕" },
              { id: "c", label: "Complain less", emoji: "⭕" },
              { id: "d", label: "I did my best here", emoji: "⭕" },
            ],
          },
        ],
      },
      {
        id: "q2",
        title: "Listening and Respect",
        emoji: "2️⃣",
        sections: [
          {
            id: "q2s1",
            prompt: "When my parent talked to me about my grades…",
            type: "single",
            options: [
              { id: "a", label: "I listened", emoji: "⭕" },
              { id: "b", label: "I listened a little", emoji: "⭕" },
              { id: "c", label: "I did NOT listen", emoji: "⭕" },
            ],
          },
          {
            id: "q2s2",
            prompt: "I looked at my parent and paid attention:",
            type: "single",
            options: [
              { id: "a", label: "Yes", emoji: "⭕" },
              { id: "b", label: "Sometimes", emoji: "⭕" },
              { id: "c", label: "No", emoji: "⭕" },
            ],
          },
        ],
      },
      {
        id: "q3",
        title: "My Feelings and Reactions",
        emoji: "3️⃣",
        sections: [
          {
            id: "q3s1",
            prompt: "When I felt upset, I:",
            type: "single",
            options: [
              { id: "a", label: "Stayed calm", emoji: "⭕" },
              { id: "b", label: "Cried quietly", emoji: "⭕" },
              { id: "c", label: "Yelled or screamed", emoji: "⭕" },
            ],
          },
          {
            id: "q3s2",
            prompt: "Was yelling a good choice?",
            type: "single",
            options: [
              { id: "a", label: "Yes", emoji: "⭕" },
              { id: "b", label: "No", emoji: "⭕" },
            ],
          },
          {
            id: "q3s3",
            prompt: "What happens when I yell?",
            type: "single",
            options: [
              { id: "a", label: "Nothing", emoji: "⭕" },
              { id: "b", label: "I get consequences", emoji: "⭕" },
            ],
          },
        ],
      },
      {
        id: "q4",
        title: "Understanding Consequences",
        emoji: "4️⃣",
        sections: [
          {
            id: "q4s1",
            prompt:
              'Finish the sentence: "I did NOT get consequences for crying. I got consequences because I ____________."',
            type: "text",
            placeholder: "Write or say it here...",
          },
        ],
      },
      {
        id: "q5",
        title: "Math Time",
        emoji: "5️⃣",
        sections: [
          {
            id: "q5s1",
            prompt: "At the beginning of math time, my attitude was:",
            type: "single",
            options: [
              { id: "a", label: "Good", emoji: "⭕" },
              { id: "b", label: "Okay", emoji: "⭕" },
              { id: "c", label: "Bad", emoji: "⭕" },
            ],
          },
          {
            id: "q5s2",
            prompt: "I tried to listen and learn:",
            type: "single",
            options: [
              { id: "a", label: "Yes", emoji: "⭕" },
              { id: "b", label: "A little", emoji: "⭕" },
              { id: "c", label: "No", emoji: "⭕" },
            ],
          },
          {
            id: "q5s3",
            prompt: "After breathing and trying again:",
            type: "single",
            options: [
              { id: "a", label: "I focused better", emoji: "⭕" },
              { id: "b", label: "I still struggled", emoji: "⭕" },
            ],
          },
          {
            id: "q5s4",
            prompt: "I learned something new today:",
            type: "single",
            options: [
              { id: "a", label: "Yes", emoji: "⭕" },
              { id: "b", label: "Not yet", emoji: "⭕" },
            ],
          },
        ],
      },
      {
        id: "q6",
        title: "Honesty Check",
        emoji: "6️⃣",
        sections: [
          {
            id: "q6s1",
            prompt: 'Is this true? "I always do everything right."',
            type: "single",
            options: [
              { id: "a", label: "Yes", emoji: "⭕" },
              { id: "b", label: "No", emoji: "⭕" },
            ],
          },
          {
            id: "q6s2",
            prompt:
              '"Sometimes I do things right, and sometimes I need to improve." A better sentence is:',
            type: "single",
            options: [
              { id: "a", label: "True", emoji: "⭕" },
              { id: "b", label: "Not true", emoji: "⭕" },
            ],
          },
        ],
      },
      {
        id: "q7",
        title: "One Good Thing & One Thing to Improve",
        emoji: "7️⃣",
        sections: [
          {
            id: "q7s1",
            prompt: "One thing I did well today:",
            type: "text",
            placeholder: "Write here...",
          },
          {
            id: "q7s2",
            prompt: "One thing I want to improve tomorrow:",
            type: "text",
            placeholder: "Write here...",
          },
        ],
      },
      {
        id: "q8",
        title: "My Promise for Tomorrow",
        emoji: "⭐",
        sections: [
          {
            id: "q8s1",
            prompt: "My promise:",
            type: "single",
            options: [
              { id: "a", label: "I will listen better", emoji: "⭐" },
              { id: "b", label: "I will stay calmer", emoji: "⭐" },
              { id: "c", label: "I will try even when I don't want to", emoji: "⭐" },
              { id: "d", label: "I will ask for help instead of yelling", emoji: "⭐" },
            ],
          },
        ],
      },
    ],
  },
];
