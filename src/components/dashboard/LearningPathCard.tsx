import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, ChevronDown, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { LearningPath } from "@/hooks/use-ai-learning-paths";

interface LearningPathCardProps {
  path: LearningPath;
}

const LearningPathCard = ({ path }: LearningPathCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group rounded-lg border border-border hover:border-accent/30 hover:shadow-card transition-all cursor-pointer"
      onClick={() => setExpanded((prev) => !prev)}
    >
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-heading text-sm font-bold text-foreground">
                {path.title}
              </h4>
              <span
                className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${
                  path.tag === "Recommended"
                    ? "bg-accent/10 text-accent"
                    : path.tag === "Skill Gap"
                    ? "bg-destructive/10 text-destructive"
                    : "bg-emerald/10 text-emerald"
                }`}
              >
                {path.tag}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{path.description}</p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 mt-1"
          >
            <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </motion.div>
        </div>
        <div className="flex items-center gap-4 mt-3">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <BookOpen className="w-3 h-3" /> {path.modules} modules
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" /> {path.duration}
          </span>
          {path.progress > 0 && (
            <div className="flex items-center gap-2 flex-1">
              <Progress value={path.progress} className="h-1.5 bg-muted flex-1" />
              <span className="text-xs font-semibold text-accent">{path.progress}%</span>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {expanded && path.module_details && path.module_details.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 border-t border-border space-y-3">
              {path.module_details.map((mod, idx) => (
                <div key={idx} className="space-y-1.5">
                  <p className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center text-[10px] font-bold shrink-0">
                      {idx + 1}
                    </span>
                    {mod.name}
                  </p>
                  <ul className="ml-7 space-y-1">
                    {mod.steps.map((step, sIdx) => (
                      <li key={sIdx} className="text-xs text-muted-foreground flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-muted-foreground/50 shrink-0 mt-0.5" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LearningPathCard;
