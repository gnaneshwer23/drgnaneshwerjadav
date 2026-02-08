import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-3">
              Accountable Hindustan
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-sm">
              India's career operating system. Converting education into
              employability, skills into trust, and potential into economic
              mobility.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/80 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {["Skill Engine", "Trust Engine", "Career Engine", "Leadership Engine"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/50 hover:text-saffron transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/80 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["About", "Careers", "Partners", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/50 hover:text-saffron transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Accountable Hindustan. Founded by Dr. Gnaneshwer Jadav. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Compliance"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-primary-foreground/40 hover:text-saffron transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
