import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { inferChatActions } from "@/lib/chat-intent";

const TOKEN =
  /https:\/\/[^\s)]+|\/(?:book|books|about|frameworks|chat|course|courses|consultation|shelf|work|projects|education|skills|think|systems|lab|patent|research|now|cv|contact|how-i-build|experience)(?:\/[\w-]+)?(?:#[\w-]*)?/g;

const ALLOWED_HOSTS = new Set([
  "gumroad.com",
  "www.gumroad.com",
  "calendar.google.com",
  "calendar.app.google.com",
  "buy.stripe.com",
  "checkout.stripe.com",
  "gnaneshwerjadav.com",
  "www.gnaneshwerjadav.com",
]);

function isAllowedHref(href: string): boolean {
  if (href.startsWith("/")) return true;
  try {
    const url = new URL(href);
    if (ALLOWED_HOSTS.has(url.hostname)) return true;
    return url.hostname.endsWith(".gumroad.com");
  } catch {
    return false;
  }
}

export function ChatLinkedText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const pattern = new RegExp(TOKEN.source, "g");
  let last = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > last) {
      nodes.push(
        <span key={`t-${index}`}>{text.slice(last, match.index)}</span>,
      );
    }
    const href = match[0];
    if (href.startsWith("/") && isAllowedHref(href)) {
      nodes.push(
        <Link
          key={`i-${index}`}
          to={href}
          className="font-medium text-foreground underline-offset-2 hover:underline"
        >
          {href}
        </Link>,
      );
    } else if (isAllowedHref(href)) {
      nodes.push(
        <a
          key={`e-${index}`}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground underline-offset-2 hover:underline"
        >
          {href}
        </a>,
      );
    } else {
      nodes.push(<span key={`p-${index}`}>{href}</span>);
    }
    last = match.index + href.length;
    index += 1;
  }

  if (last < text.length) {
    nodes.push(<span key="end">{text.slice(last)}</span>);
  }

  return <>{nodes}</>;
}

const chipClass =
  "inline-flex min-h-9 items-center rounded-full border border-border px-4 py-1.5 font-mono text-[11px] font-medium tracking-wide text-foreground hover:border-foreground/30";

const primaryChipClass =
  "inline-flex min-h-9 items-center rounded-full bg-navy px-4 py-1.5 font-mono text-[11px] font-medium tracking-wide text-white hover:opacity-90";

export function ChatActions({
  userMessages,
  lastAssistant,
}: {
  userMessages: string[];
  lastAssistant: string;
}) {
  const actions = inferChatActions({ userMessages, lastAssistant });
  if (actions.length === 0) return null;

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {actions.map((action) =>
        action.href ? (
          <a
            key={action.label}
            href={action.href}
            target="_blank"
            rel="noreferrer"
            className={action.primary ? primaryChipClass : chipClass}
          >
            {action.label}
          </a>
        ) : (
          <Link
            key={action.label}
            to={action.to}
            className={action.primary ? primaryChipClass : chipClass}
          >
            {action.label}
          </Link>
        ),
      )}
    </div>
  );
}
