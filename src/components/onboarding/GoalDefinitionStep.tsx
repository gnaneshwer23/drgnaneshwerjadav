import { motion } from "framer-motion";
import { OnboardingData, goalOptions, targetRoles, timelineOptions, priorityOptions } from "@/lib/onboarding-data";

interface GoalDefinitionStepProps {
  data: OnboardingData;
  onChange: (data: Partial<OnboardingData>) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const GoalDefinitionStep = ({ data, onChange }: GoalDefinitionStepProps) => {
  const togglePriority = (priority: string) => {
    const current = data.priorities;
    if (current.includes(priority)) {
      onChange({ priorities: current.filter((p) => p !== priority) });
    } else if (current.length < 3) {
      onChange({ priorities: [...current, priority] });
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Primary Career Goal */}
      <motion.div variants={item} className="space-y-3">
        <label className="text-sm font-semibold text-foreground">
          What's your primary career goal?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {goalOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onChange({ careerGoal: opt.value })}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all text-center ${
                data.careerGoal === opt.value
                  ? "border-accent bg-accent/10 text-foreground shadow-sm"
                  : "border-border bg-card hover:border-accent/40 text-muted-foreground"
              }`}
            >
              <span className="text-2xl">{opt.icon}</span>
              <span className="text-sm font-medium">{opt.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Target Role */}
      <motion.div variants={item} className="space-y-3">
        <label className="text-sm font-semibold text-foreground">
          What role are you targeting?
        </label>
        <div className="flex flex-wrap gap-2">
          {targetRoles.map((role) => (
            <button
              key={role}
              onClick={() => onChange({ targetRole: role })}
              className={`px-3 py-1.5 rounded-lg border transition-all text-sm ${
                data.targetRole === role
                  ? "border-accent bg-accent text-accent-foreground font-semibold"
                  : "border-border bg-card hover:border-accent/40 text-muted-foreground"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div variants={item} className="space-y-3">
        <label className="text-sm font-semibold text-foreground">
          When do you want to achieve this?
        </label>
        <div className="flex flex-wrap gap-3">
          {timelineOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onChange({ timeline: opt.value })}
              className={`px-5 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                data.timeline === opt.value
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-border bg-card hover:border-accent/40 text-muted-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Priorities */}
      <motion.div variants={item} className="space-y-3">
        <label className="text-sm font-semibold text-foreground">
          What matters most to you? <span className="text-muted-foreground font-normal">(pick up to 3)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {priorityOptions.map((priority) => (
            <button
              key={priority}
              onClick={() => togglePriority(priority)}
              className={`px-3 py-1.5 rounded-full border transition-all text-sm ${
                data.priorities.includes(priority)
                  ? "border-accent bg-accent text-accent-foreground font-semibold"
                  : "border-border bg-card hover:border-accent/40 text-muted-foreground"
              }`}
            >
              {priority}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {data.priorities.length}/3 selected
        </p>
      </motion.div>
    </motion.div>
  );
};

export default GoalDefinitionStep;
