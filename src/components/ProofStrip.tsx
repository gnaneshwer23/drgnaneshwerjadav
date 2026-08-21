import { proofStrip } from "@/data/evidence";

const ProofStrip = () => {
  return (
    <section
      aria-label="Defensible proof"
      className="border-y border-border bg-background"
    >
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Proof · measured only · targets live on case studies
        </p>
        <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {proofStrip.map((item) => (
            <li key={item.label}>
              <p className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProofStrip;
