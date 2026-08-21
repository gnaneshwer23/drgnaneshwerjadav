import { describe, expect, it } from "vitest";
import { flagships, work, workBySlug } from "@/data/work";
import { omittedClaims, proofStrip } from "@/data/evidence";

describe("work inventory", () => {
  it("has four verified flagships", () => {
    expect(flagships.map((item) => item.slug)).toEqual([
      "vigil-modi",
      "aksh-health",
      "akeno-health",
      "elevare",
    ]);
  });

  it("does not include FlowPilot", () => {
    expect(work.some((item) => /flow.?pilot/i.test(item.title))).toBe(false);
    expect(omittedClaims.some((item) => item.includes("FlowPilot"))).toBe(true);
  });

  it("resolves case studies by slug", () => {
    expect(workBySlug("vigil-modi")?.number).toBe("01");
    expect(workBySlug("missing")).toBeUndefined();
  });

  it("keeps home proof as measured-only", () => {
    expect(proofStrip.every((item) => item.status === "MEASURED")).toBe(true);
  });
});
