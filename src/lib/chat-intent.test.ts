import { describe, expect, it } from "vitest";
import { inferChatActions } from "@/lib/chat-intent";

describe("inferChatActions", () => {
  it("offers Book consult when the visitor asks to book, not the full shop", () => {
    const chips = inferChatActions({
      userMessages: ["How do I book the 50-minute consult?"],
      lastAssistant: "Pick a slot on /book, then pay. 50 minutes, £50.",
    });
    expect(chips.map((chip) => chip.kind)).toEqual(["consult"]);
    expect(chips[0]?.primary).toBe(true);
  });

  it("offers Open Decide Then Build when they ask what to read", () => {
    const chips = inferChatActions({
      userMessages: ["What should I read first?"],
      lastAssistant: "Start with Decide Then Build.",
    });
    expect(chips.some((chip) => chip.kind === "book")).toBe(true);
    expect(chips.some((chip) => chip.kind === "waitlist")).toBe(false);
  });

  it("does not offer a consult chip for a medical question", () => {
    const chips = inferChatActions({
      userMessages: ["Can you diagnose my gut symptoms?"],
      lastAssistant: "I cannot give medical advice.",
    });
    expect(chips).toEqual([]);
  });
});
