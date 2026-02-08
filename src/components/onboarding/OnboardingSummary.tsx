import { motion } from "framer-motion";
import { CheckCircle2, Target, Zap, Trophy } from "lucide-react";
import { OnboardingData, statusOptions, goalOptions } from "@/lib/onboarding-data";

interface OnboardingSummaryProps {
  data: OnboardingData;
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const OnboardingSummary = ({ data }: OnboardingSummaryProps) => {
  const statusLabel = statusOptions.find((s) => s.value === data.currentStatus)?.label ?? data.currentStatus;
  const goalLabel = goalOptions.find((g) => g.value === data.careerGoal)?.label ?? data.careerGoal;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Success Header */}
      <motion.div variants={item} className="text-center space-y-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-16 h-16 mx-auto rounded-full bg-emerald/10 flex items-center justify-center"
        >
          <CheckCircle2 className="w-8 h-8 text-emerald" />
        </motion.div>
        <h3 className="font-heading text-xl font-bold text-foreground">
          Your Career Profile is Ready!
        </h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          We've mapped your background, skills, and goals. Here's a quick summary of your career profile.
        </p>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <motion.div
          variants={item}
          className="p-4 rounded-xl border border-border bg-card space-y-2"
        >
          <div className="flex items-center gap-2 text-accent">
            <Target className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Profile</span>
          </div>
          <p className="text-sm font-medium text-foreground">{statusLabel}</p>
          <p className="text-xs text-muted-foreground">
            {data.educationLevel} · {data.fieldOfStudy}
          </p>
          <p className="text-xs text-muted-foreground">
            {data.yearsExperience} yrs experience
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="p-4 rounded-xl border border-border bg-card space-y-2"
        >
          <div className="flex items-center gap-2 text-accent">
            <Zap className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Skills</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {data.skills.slice(0, 6).map((skill) => (
              <span
                key={skill.name}
                className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
              >
                {skill.name}
              </span>
            ))}
            {data.skills.length > 6 && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                +{data.skills.length - 6} more
              </span>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="p-4 rounded-xl border border-border bg-card space-y-2"
        >
          <div className="flex items-center gap-2 text-accent">
            <Trophy className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Goals</span>
          </div>
          <p className="text-sm font-medium text-foreground">{goalLabel}</p>
          <p className="text-xs text-muted-foreground">
            Target: {data.targetRole}
          </p>
          <p className="text-xs text-muted-foreground">
            Timeline: {data.timeline}
          </p>
        </motion.div>
      </div>

      {/* Interests & Priorities */}
      <motion.div variants={item} className="p-4 rounded-xl border border-border bg-card space-y-3">
        <div className="flex gap-8">
          <div className="space-y-1.5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Interests</p>
            <div className="flex flex-wrap gap-1.5">
              {data.interests.map((i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded-full border border-accent/30 text-accent font-medium">
                  {i}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-1.5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Priorities</p>
            <div className="flex flex-wrap gap-1.5">
              {data.priorities.map((p) => (
                <span key={p} className="text-xs px-2 py-0.5 rounded-full border border-emerald/30 text-emerald font-medium">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OnboardingSummary;
