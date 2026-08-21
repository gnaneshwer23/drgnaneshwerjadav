import { describe, expect, it } from "vitest";
import { FLAGSHIP_SLUGS, flagships, work, workBySlug } from "@/data/work";
import { omittedClaims, proofStrip } from "@/data/evidence";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { sitePagesKnowledge } from "@/data/chat-knowledge";
import { avatarKnowledge } from "@/data/avatar-knowledge";
import { storefront } from "@/data/commerce";

describe("work inventory", () => {
  it("features Fluent Institute, DeliverX, and Aksh Health", () => {
    expect(FLAGSHIP_SLUGS).toEqual([
      "fluent-institute",
      "deliverx",
      "aksh-health",
    ]);
    expect(flagships.map((item) => item.href)).toEqual([
      "https://fluent.institute",
      "https://www.deliverx.dev",
      "https://akshhealth.com",
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

describe("experience vs education", () => {
  it("lists roles reverse-chronologically with Independent first", () => {
    expect(experience[0]?.organisation).toBe("Independent");
    expect(experience.some((item) => item.organisation === "Akeno Health")).toBe(
      true,
    );
  });

  it("keeps postdoc in education, not experience", () => {
    expect(
      experience.some((item) => /postdoc/i.test(item.role)),
    ).toBe(false);
    expect(
      education.some((item) => item.credential.startsWith("Postdoctoral")),
    ).toBe(true);
  });
});

describe("DrJadav site digest", () => {
  it("covers the eight public pages and live flagship URLs", () => {
    const digest = sitePagesKnowledge();
    for (const path of [
      "/projects",
      "/experience",
      "/education",
      "/skills",
      "/books",
      "/course",
      "/frameworks",
      "/book",
    ]) {
      expect(digest).toContain(path);
    }
    expect(digest).toContain("https://fluent.institute");
    expect(digest).toContain("https://www.deliverx.dev");
    expect(digest).toContain("https://akshhealth.com");
    expect(digest).toContain("PRODUCT CONCEPTS");
    expect(digest).toContain("Product management");
    expect(digest).toContain("Node.js + docx");
  });

  it("lists ten books with empty buy links until published", () => {
    expect(storefront.books).toHaveLength(10);
    expect(storefront.books.filter((book) => book.forthcoming)).toHaveLength(2);
    expect(storefront.books[8]?.title).toBe("The Shadow Who Got Lost at Night");
    expect(storefront.books[9]?.title).toBe("Book 10");
    expect(storefront.books.every((book) => book.downloadHref)).toBe(true);
  });

  it("encodes fact vs concept rules from the avatar knowledge base", () => {
    const avatar = avatarKnowledge();
    expect(avatar).toContain("FACT:");
    expect(avatar).toContain("PRODUCT CONCEPT:");
    expect(avatar).toContain("Never present a ChatGPT brainstorm as a launched product");
    expect(avatar).toContain("Loopd");
    expect(avatar).toContain("FlowPilot");
    expect(avatar).toContain("claimed");
  });
});
