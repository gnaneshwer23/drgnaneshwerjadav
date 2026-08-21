import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const TOKEN =
  /https:\/\/[^\s)]+|\/(?:book|books|about|frameworks|chat)(?:#[\w-]*)?/g;

const ALLOWED_HOSTS = new Set([
  "gumroad.com",
  "www.gumroad.com",
  "calendar.google.com",
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
          className="font-medium text-saffron underline-offset-2 hover:underline"
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
          className="font-medium text-saffron underline-offset-2 hover:underline"
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

export function ChatHandoff() {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <Link
        to="/book"
        className="inline-flex min-h-9 items-center rounded-full bg-saffron-gradient px-4 py-1.5 text-xs font-semibold text-accent-foreground"
      >
        Book a consult
      </Link>
      <Link
        to="/books"
        className="inline-flex min-h-9 items-center rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-semibold text-primary-foreground/85 hover:border-saffron/40 hover:text-saffron"
      >
        Shop books
      </Link>
    </div>
  );
}
