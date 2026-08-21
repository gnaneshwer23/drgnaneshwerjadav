import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Brain,
  Briefcase,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Mail,
  Microscope,
} from "lucide-react";
import ClassicNav from "@/components/ClassicNav";
import { site, work } from "@/data/site";
import { resume } from "@/data/resume";
import profilePhoto from "@/assets/profile.jpg";

const tags = [
  "PHD IMMUNOLOGIST",
  "HEALTHCARE PRODUCT LEADER",
  "PATENTED INNOVATOR",
  "NO-CODE ENTREPRENEUR",
] as const;

const expertise = [
  { label: "RESEARCH", title: "Scientific Research Experience", icon: Microscope, color: "#4caf50" },
  { label: "INNOVATION", title: "Healthcare Product Innovation", icon: Lightbulb, color: "#ff9800" },
  { label: "LEADERSHIP", title: "Akeno Health & Accountable Hindustan", icon: Briefcase, color: "#2196f3" },
  { label: "TECHNOLOGY", title: "AI & product implementation", icon: Brain, color: "#9c27b0" },
] as const;

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      document.getElementById(id)?.scrollIntoView();
    }
  }, [location.hash]);

  return (
    <main className="min-h-dvh bg-white text-[#333]" style={{ fontFamily: '"Inter", sans-serif' }}>
      <ClassicNav />

      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#2196f3]/10" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-[#ff9800]/10" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-medium text-[#2196f3]">Hello, I&apos;m</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#333] md:text-5xl">
              {site.name}
            </h1>
            <h2 className="mt-4 text-xl font-semibold text-[#333]">
              Empowering Healthcare, Science, and Innovation
            </h2>
            <p className="mt-1 text-lg text-[#2196f3]">with Scientific Expertise</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-[#eaeaea] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#333]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center rounded-lg bg-[#2196f3] px-5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#0d6efd]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center rounded-lg border border-[#2196f3] px-5 text-sm font-medium text-[#2196f3] transition hover:bg-[#2196f3] hover:text-white"
              >
                Let&apos;s Collaborate
              </a>
              <Link
                to="/chat"
                className="inline-flex min-h-11 items-center rounded-lg bg-[#eaeaea] px-5 text-sm font-medium text-[#333] transition hover:-translate-y-0.5"
              >
                Ask the guide
              </Link>
            </div>
          </div>

          <div className="relative mx-auto">
            <img
              src={profilePhoto}
              alt="Dr Gnaneshwer Jadav"
              width={460}
              height={460}
              className="h-64 w-64 rounded-full object-cover shadow-[0_10px_30px_rgba(33,150,243,0.3)] md:h-80 md:w-80"
            />
            <span className="absolute right-4 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#4caf50] text-white shadow">
              <FlaskConical className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="absolute bottom-8 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#9c27b0] text-white shadow">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff9800] text-white shadow">
              <Lightbulb className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eaeaea] bg-[#fafafa] py-12">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-[#eaeaea] bg-white p-5"
            >
              <item.icon className="h-6 w-6" style={{ color: item.color }} />
              <p className="mt-4 text-[11px] font-bold tracking-widest" style={{ color: item.color }}>
                {item.label}
              </p>
              <h3 className="mt-2 text-base font-bold">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-sm font-bold tracking-[0.2em] text-[#2196f3]">PROFILE</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4a4a4a]">
          I&apos;m Dr. Gnaneshwer Jadav — a scientist-turned-product leader passionate
          about transforming healthcare and education with AI. With a PhD in
          Immunology, an MBA in Healthcare, and years of experience as a CPO and
          founder, I bring cross-functional leadership to building impactful,
          scalable digital solutions.
        </p>
        <h2 className="mt-12 text-sm font-bold tracking-[0.2em] text-[#2196f3]">VISION</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4a4a4a]">
          To bridge science, technology, and human-centered design to improve
          lives through smart, inclusive, and sustainable innovation.
        </p>
      </section>

      <section id="experience" className="scroll-mt-24 border-t border-[#eaeaea] bg-[#fafafa] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#2196f3]">MY JOURNEY</h2>
          <ol className="mt-10 space-y-6 border-l-2 border-[#2196f3]/30 pl-6">
            {resume.experience.map((item) => (
              <li key={`${item.organisation}-${item.period}`}>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2196f3]">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-bold">
                  {item.role}, {item.organisation}
                </h3>
                <p className="text-sm text-[#757575]">{item.place}</p>
                {item.summary && (
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#4a4a4a]">
                    {item.summary}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="education" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-sm font-bold tracking-[0.2em] text-[#2196f3]">EDUCATION</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {resume.education.map((item) => (
            <li
              key={item.credential}
              className="rounded-xl border border-[#eaeaea] bg-white p-5"
            >
              <GraduationCap className="h-5 w-5 text-[#2196f3]" />
              <h3 className="mt-3 font-bold">{item.credential}</h3>
              <p className="mt-1 text-sm text-[#757575]">{item.source}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="scroll-mt-24 border-t border-[#eaeaea] bg-[#fafafa] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#2196f3]">PROJECTS</h2>
          <p className="mt-3 max-w-2xl text-[#757575]">
            Selected public work in HealthTech, EdTech, and delivery systems.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {work.map((item) => {
              const inner = (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2196f3]">
                    {item.category}
                  </p>
                  <h3 className="mt-2 flex items-center gap-2 text-xl font-bold">
                    {item.title}
                    <ArrowUpRight className="h-4 w-4 text-[#757575]" />
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4a4a4a]">
                    {item.description}
                  </p>
                </>
              );
              return (
                <li key={item.title}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-xl border border-[#eaeaea] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#2196f3]/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="block rounded-xl border border-[#eaeaea] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#2196f3]/40"
                    >
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-sm font-bold tracking-[0.2em] text-[#2196f3]">CONTACT</h2>
        <p className="mt-4 max-w-xl text-lg text-[#4a4a4a]">
          Product leadership, AI-enabled systems, or building in regulated
          domains — get in touch.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#2196f3] px-5 text-sm font-medium text-white"
          >
            <Mail className="h-4 w-4" />
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-lg border border-[#eaeaea] px-5 text-sm font-medium"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-lg border border-[#eaeaea] px-5 text-sm font-medium"
          >
            GitHub
          </a>
          <Link
            to="/book"
            className="inline-flex min-h-11 items-center rounded-lg bg-[#eaeaea] px-5 text-sm font-medium"
          >
            Book a consult
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#eaeaea] py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-[#757575]">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
          <div className="flex flex-wrap gap-5">
            <Link to="/chat" className="hover:text-[#2196f3]">
              Chat
            </Link>
            <Link to="/books" className="hover:text-[#2196f3]">
              Books
            </Link>
            <Link to="/book" className="hover:text-[#2196f3]">
              Book
            </Link>
            <Link to="/accountable-hindustan" className="hover:text-[#2196f3]">
              Accountable Hindustan
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
