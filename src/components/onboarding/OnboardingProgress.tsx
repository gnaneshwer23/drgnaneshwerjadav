import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Step {
  label: string;
  description: string;
}

interface OnboardingProgressProps {
  steps: Step[];
  currentStep: number;
}

const OnboardingProgress = ({ steps, currentStep }: OnboardingProgressProps) => {
  return (
    <div className="flex items-center justify-center gap-0 w-full max-w-2xl mx-auto">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={step.label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  backgroundColor: isCompleted
                    ? "hsl(var(--saffron))"
                    : isActive
                    ? "hsl(var(--navy))"
                    : "hsl(var(--muted))",
                }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-heading font-bold relative"
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 text-accent-foreground" />
                ) : (
                  <span className={isActive ? "text-primary-foreground" : "text-muted-foreground"}>
                    {index + 1}
                  </span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeRing"
                    className="absolute inset-[-4px] rounded-full border-2 border-accent"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
              <div className="text-center hidden sm:block">
                <p className={`text-xs font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.label}
                </p>
                <p className="text-[10px] text-muted-foreground">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-3 mt-[-1.5rem] sm:mt-0 relative">
                <div className="absolute inset-0 bg-muted rounded-full" />
                <motion.div
                  initial={false}
                  animate={{ scaleX: isCompleted ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-saffron rounded-full origin-left"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OnboardingProgress;
