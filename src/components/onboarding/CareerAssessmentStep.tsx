import { motion } from "framer-motion";
import { OnboardingData, statusOptions, educationOptions, fieldOptions, experienceOptions, interestOptions } from "@/lib/onboarding-data";

interface CareerAssessmentStepProps {
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

const CareerAssessmentStep = ({ data, onChange }: CareerAssessmentStepProps) => {
  const toggleInterest = (interest: string) => {
    const current = data.interests;
    if (current.includes(interest)) {
      onChange({ interests: current.filter((i) => i !== interest) });
    } else if (current.length < 5) {
      onChange({ interests: [...current, interest] });
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Current Status */}
      <motion.div variants={item} className="space-y-3">
        <label className="text-sm font-semibold text-foreground">
          Where are you in your career journey?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onChange({ currentStatus: opt.value })}
              className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all text-left text-sm font-medium ${
                data.currentStatus === opt.value
                  ? "border-accent bg-accent/10 text-foreground shadow-sm"
                  : "border-border bg-card hover:border-accent/40 text-muted-foreground"
              }`}
            >
              <span className="text-lg">{opt.icon}</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Education Level */}
      <motion.div variants={item} className="space-y-3">
        <label className="text-sm font-semibold text-foreground">
          Highest education level
        </label>
        <div className="flex flex-wrap gap-2">
          {educationOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onChange({ educationLevel: opt.value })}
              className={`px-4 py-2 rounded-lg border transition-all text-sm font-medium ${
                data.educationLevel === opt.value
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-border bg-card hover:border-accent/40 text-muted-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Field of Study */}
      <motion.div variants={item} className="space-y-3">
        <label className="text-sm font-semibold text-foreground">
          Field of study / work
        </label>
        <div className="flex flex-wrap gap-2">
          {fieldOptions.map((field) => (
            <button
              key={field}
              onClick={() => onChange({ fieldOfStudy: field })}
              className={`px-3 py-1.5 rounded-lg border transition-all text-sm ${
                data.fieldOfStudy === field
                  ? "border-accent bg-accent/10 text-foreground font-semibold"
                  : "border-border bg-card hover:border-accent/40 text-muted-foreground"
              }`}
            >
              {field}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div variants={item} className="space-y-3">
        <label className="text-sm font-semibold text-foreground">
          Years of experience
        </label>
        <div className="flex flex-wrap gap-2">
          {experienceOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onChange({ yearsExperience: opt.value })}
              className={`px-4 py-2 rounded-lg border transition-all text-sm font-medium ${
                data.yearsExperience === opt.value
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-border bg-card hover:border-accent/40 text-muted-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div variants={item} className="space-y-3">
        <label className="text-sm font-semibold text-foreground">
          What areas interest you? <span className="text-muted-foreground font-normal">(pick up to 5)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((interest) => (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`px-3 py-1.5 rounded-full border transition-all text-sm ${
                data.interests.includes(interest)
                  ? "border-accent bg-accent text-accent-foreground font-semibold"
                  : "border-border bg-card hover:border-accent/40 text-muted-foreground"
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {data.interests.length}/5 selected
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CareerAssessmentStep;
