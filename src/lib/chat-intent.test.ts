import { describe, expect, it } from "vitest";
import { inferChatActions } from "@/lib/chat-intent";

describe("inferChatActions", () => {
  it("offers Book consult when the visitor asks to book, not the full shop", () => {
    const chips = inferChatActions({
      userMessages: ["How do I book the 50-minute consult?"],
      lastAssistant: "Pick a slot on /book, then pay. 50 minutes, £50.",
    });
    expect(chips[0]?.kind).toBe("consult");
    expect(chips[0]?.primary).toBe(true);
    expect(chips.some((chip) => chip.to === "/book")).toBe(true);
    expect(chips.some((chip) => chip.kind === "waitlist")).toBe(false);
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

  it("offers live project URLs for named flagships", () => {
    const chips = inferChatActions({
      userMessages: [
        "What are the live projects — Fluent Institute, DeliverX, and Aksh Health?",
      ],
      lastAssistant:
        "Fluent Institute is https://fluent.institute. DeliverX is https://www.deliverx.dev. Aksh Health is https://akshhealth.com.",
    });
    expect(chips.some((chip) => chip.href === "https://fluent.institute")).toBe(
      true,
    );
    expect(chips.some((chip) => chip.href === "https://www.deliverx.dev")).toBe(
      true,
    );
    expect(chips.some((chip) => chip.to === "/projects")).toBe(true);
  });

  it("offers education and experience pages", () => {
    expect(
      inferChatActions({
        userMessages: ["What is his education?"],
        lastAssistant: "PhD immunology at Verona. See /education.",
      }).map((chip) => chip.to),
    ).toContain("/education");
    expect(
      inferChatActions({
        userMessages: ["Walk me through his experience in LinkedIn order."],
        lastAssistant: "Independent first. See /experience.",
      }).map((chip) => chip.to),
    ).toContain("/experience");
  });
});
