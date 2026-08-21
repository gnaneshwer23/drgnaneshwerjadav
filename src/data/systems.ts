export const systems = [
  {
    number: "01",
    title: "Decide Then Build",
    dek: "Operating sequence",
    body: "Name the decision and the constraint before generating software. AI made execution cheap; it did not make choosing easy. The loop lives as a framework SKU on /frameworks and as a book on the shelf.",
    href: "/frameworks",
    hrefLabel: "Open the loop",
  },
  {
    number: "02",
    title: "MODI",
    dek: "Modular Orchestrated Digital Intelligence",
    body: "The architecture behind Vigil-MODI: modular agents, regulation-as-code, privacy-first anonymisation, FHIR-native data, human-governed review. AI assists. It does not own the decision.",
    href: "/work/vigil-modi",
    hrefLabel: "Read the case",
  },
  {
    number: "03",
    title: "On-prem clinical AI",
    dek: "Aksh Health constraint",
    body: "Special-category health data stays on site. Ingestion (HL7 / FHIR), local inference, append-only audit. Cloud chat APIs are a non-starter for this class of problem.",
    href: "/work/aksh-health",
    hrefLabel: "Aksh Health",
  },
  {
    number: "04",
    title: "Delivery intelligence",
    dek: "From narrative to accountable work",
    body: "Maps, roles, risks, and next actions — not status theatre. DeliverX and the delivery-intelligence archive are the artefacts.",
    href: "/work/deliverx",
    hrefLabel: "DeliverX",
  },
  {
    number: "05",
    title: "Simulation-first learning",
    dek: "Fluent · Elevare",
    body: "Practise the job. Certificates are a receipt, not the skill. Human coaching stays in the loop; models generate the reps.",
    href: "/work/elevare",
    hrefLabel: "Elevare",
  },
] as const;

export const howIBuild = [
  {
    title: "Start in the constraint",
    body: "Clinical safety, GDPR Article 9, CDSCO/MHRA process, or a hiring manager’s bar. The constraint is the brief.",
  },
  {
    title: "Decide, then make one artefact",
    body: "A working loop that would change the decision. Specs without a prototype are theatre; prototypes without a decision are toys.",
  },
  {
    title: "Keep a human on the hook",
    body: "Reviewers, clinicians, mentors. Models summarise, triage, and draft. People own the call.",
  },
  {
    title: "Measure what you can defend",
    body: "CV and LinkedIn figures are labelled. Targets stay targets. If a number is not in a source, it does not go on the home strip.",
  },
] as const;

export const labPractices = [
  {
    title: "Accelerator, not oracle",
    body: "Daily use: synthesising interviews, drafting PRDs, prototyping workflows, exploring agent patterns. Tools rotate; the rule does not — humans in the loop.",
  },
  {
    title: "Regulated by default",
    body: "Health and education products are designed as if an auditor will ask who decided, on what evidence, and where the data lived.",
  },
  {
    title: "Public experiments",
    body: "GitHub (gnaneshwer23) holds prototypes and demos. Exploratory repos are labelled as learning in public, not polished products. Company on GitHub: Akenohealth.",
  },
] as const;
