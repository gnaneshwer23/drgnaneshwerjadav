import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Digital infrastructure network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 via-transparent to-navy-dark/80" />
      </div>

      {/* Geometric decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-saffron/10 opacity-40" />
      <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full border border-saffron/5 opacity-30" />

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-4 py-1.5 mb-8"
          >
            <Zap className="h-3.5 w-3.5 text-saffron" />
            <span className="text-sm font-medium text-saffron-light">
              India's Career Operating System
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-primary-foreground mb-6">
            Building India's{" "}
            <span className="text-gradient-saffron">Workforce</span>{" "}
            Infrastructure
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/70 max-w-2xl mb-10">
            Converting education into employability, skills into trust, and
            potential into economic mobility. Not an edtech product —{" "}
            <strong className="text-primary-foreground/90">
              a career operating system
            </strong>{" "}
            for 1.4 billion people.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-saffron-gradient text-accent-foreground shadow-saffron font-semibold text-base px-8 py-6 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Link to="/onboarding">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground/90 bg-primary-foreground/5 hover:bg-primary-foreground/10 font-semibold text-base px-8 py-6 rounded-xl backdrop-blur-sm"
            >
              <Shield className="mr-2 h-5 w-5" />
              For Enterprises
            </Button>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl"
        >
          {[
            { value: "6", label: "Core Engines" },
            { value: "4", label: "User Segments" },
            { value: "100+", label: "Skill Modules" },
            { value: "Pan-India", label: "Coverage" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-heading text-3xl font-bold text-saffron">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
