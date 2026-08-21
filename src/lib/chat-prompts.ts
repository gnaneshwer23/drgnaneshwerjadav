export const chatStarterPrompts = [
  {
    label: "Science",
    prompt:
      "What is his science background — pharmaceutical sciences, biotechnology, immunology?",
  },
  {
    label: "Live projects",
    prompt:
      "What are the live projects — Fluent Institute, DeliverX, and Aksh Health?",
  },
  {
    label: "Experience",
    prompt: "Walk me through his experience in LinkedIn order.",
  },
  {
    label: "Education",
    prompt: "What is his education?",
  },
  {
    label: "Skills",
    prompt: "What skills does he list?",
  },
  {
    label: "Books",
    prompt: "What should I read first?",
  },
  {
    label: "Course",
    prompt: "Is there a course I can join?",
  },
  {
    label: "Framework",
    prompt: "What is the Decide Then Build framework?",
  },
  {
    label: "Book a consult",
    prompt: "How do I book the 50-minute consult?",
  },
] as const;

/** Compact dock: offerings + one science cue. Full desk keeps the rest. */
export const chatWidgetPrompts = chatStarterPrompts.filter((item) =>
  ["Science", "Books", "Course", "Framework", "Book a consult"].includes(
    item.label,
  ),
);
