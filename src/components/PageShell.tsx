import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

const PageShell = ({ children, className }: PageShellProps) => {
  return (
    <div
      className={cn(
        "site-wrap flex flex-1 flex-col pb-24 pt-28 sm:pt-32",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="eyebrow uppercase">{children}</p>
);

export const PageTitle = ({
  children,
}: {
  children: ReactNode;
  tone?: "navy" | "paper";
}) => (
  <h1 className="display max-w-3xl text-foreground">{children}</h1>
);

export const PageLead = ({
  children,
}: {
  children: ReactNode;
  tone?: "navy" | "paper";
}) => (
  <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-muted-foreground text-pretty">
    {children}
  </p>
);

export const PrimaryCta = ({
  to,
  href,
  children,
  external,
  disabled,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  external?: boolean;
  disabled?: boolean;
}) => {
  const className =
    "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-[13px] font-medium tracking-[-0.01em] text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40";

  const inner = (
    <>
      {children}
      {external ? <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /> : null}
    </>
  );

  if (disabled) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }
  if (to) {
    return (
      <Link to={to} className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={className}
    >
      {inner}
    </a>
  );
};

export const SecondaryCta = ({
  to,
  href,
  children,
  external,
  onNavy,
  disabled,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  external?: boolean;
  onNavy?: boolean;
  disabled?: boolean;
}) => {
  const className =
    "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-border bg-transparent px-5 py-2.5 text-[13px] font-medium tracking-[-0.01em] text-foreground transition-colors hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  const inner = (
    <>
      {children}
      {external ? <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /> : null}
    </>
  );

  if (disabled) {
    return (
      <span className={`${className} opacity-40`} aria-disabled="true">
        {children}
      </span>
    );
  }
  if (to) {
    return (
      <Link to={to} className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={className}
    >
      {inner}
    </a>
  );
};

export default PageShell;
