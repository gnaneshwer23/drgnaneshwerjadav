import { education } from "@/data/education";

const EducationSection = () => {
  return (
    <section id="education" className="scroll-mt-24 border-y border-border bg-secondary/40">
      <div className="container mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="eyebrow">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
          Education
        </p>
        <h2 className="display max-w-xl text-foreground">
          The science stack. Kept off the work stage.
        </h2>
        <ol className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {education.map((item) => (
            <li key={`${item.credential}-${item.place}`}>
              <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                {item.period}
              </p>
              <h3 className="font-heading mt-2 text-xl font-semibold text-foreground">
                {item.credential}
                <span className="text-muted-foreground"> · {item.field}</span>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.place}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default EducationSection;
