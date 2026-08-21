import { cn } from "@/lib/utils";
import type { EvidenceKind } from "@/data/evidence";

const styles: Record<EvidenceKind, string> = {
  ROLE: "border-foreground/20 text-foreground",
  TEAM: "border-foreground/20 text-foreground",
  OUTCOME: "border-foreground/35 text-foreground",
  TARGET: "border-saffron/50 text-saffron",
  SCALE: "border-foreground/20 text-muted-foreground",
  EVIDENCE: "border-foreground/20 text-muted-foreground",
};

export default function EvidenceBadge({
  kind,
  label,
}: {
  kind: EvidenceKind;
  label: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full border px-3 font-mono text-[10px] uppercase tracking-[0.14em]",
        styles[kind],
      )}
    >
      <span className="mr-2 text-[9px] opacity-60">{kind}</span>
      {label}
    </span>
  );
}
