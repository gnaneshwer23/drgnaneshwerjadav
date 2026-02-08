import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { OnboardingData, SkillEntry, skillCategories } from "@/lib/onboarding-data";
import { useState } from "react";

interface SkillProfilingStepProps {
  data: OnboardingData;
  onChange: (data: Partial<OnboardingData>) => void;
}

const levelConfig = {
  beginner: { label: "Beginner", color: "bg-muted text-muted-foreground border-border" },
  intermediate: { label: "Intermediate", color: "bg-blue-50 text-blue-700 border-blue-200" },
  advanced: { label: "Advanced", color: "bg-emerald/10 text-emerald border-emerald/30" },
  expert: { label: "Expert", color: "bg-accent/10 text-accent border-accent/30" },
};

const levels: SkillEntry["level"][] = ["beginner", "intermediate", "advanced", "expert"];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const SkillProfilingStep = ({ data, onChange }: SkillProfilingStepProps) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const addSkill = (skillName: string) => {
    if (data.skills.find((s) => s.name === skillName)) return;
    onChange({
      skills: [...data.skills, { name: skillName, level: "beginner" }],
    });
  };

  const removeSkill = (skillName: string) => {
    onChange({
      skills: data.skills.filter((s) => s.name !== skillName),
    });
  };

  const updateLevel = (skillName: string, level: SkillEntry["level"]) => {
    onChange({
      skills: data.skills.map((s) =>
        s.name === skillName ? { ...s, level } : s
      ),
    });
  };

  const isSelected = (skillName: string) =>
    data.skills.some((s) => s.name === skillName);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Selected Skills */}
      {data.skills.length > 0 && (
        <motion.div variants={item} className="space-y-3">
          <label className="text-sm font-semibold text-foreground">
            Your skills ({data.skills.length})
          </label>
          <div className="space-y-3">
            {data.skills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card"
              >
                <span className="text-sm font-medium text-foreground flex-1">
                  {skill.name}
                </span>
                <div className="flex gap-1.5">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => updateLevel(skill.name, level)}
                      className={`px-2 py-1 rounded-md text-xs font-medium border transition-all ${
                        skill.level === level
                          ? levelConfig[level].color
                          : "bg-transparent text-muted-foreground border-transparent hover:bg-muted"
                      }`}
                    >
                      {levelConfig[level].label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => removeSkill(skill.name)}
                  className="p-1 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Skill Categories */}
      <motion.div variants={item} className="space-y-4">
        <label className="text-sm font-semibold text-foreground">
          Add skills from categories
        </label>
        
        {/* Category tabs */}
        <div className="flex gap-2 border-b border-border pb-2">
          {skillCategories.map((cat, index) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {skillCategories[activeCategory].skills.map((skillName) => {
            const selected = isSelected(skillName);
            return (
              <button
                key={skillName}
                onClick={() => (selected ? removeSkill(skillName) : addSkill(skillName))}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border transition-all text-sm ${
                  selected
                    ? "border-accent bg-accent/10 text-foreground font-medium"
                    : "border-border bg-card hover:border-accent/40 text-muted-foreground"
                }`}
              >
                {selected ? (
                  <X className="w-3.5 h-3.5" />
                ) : (
                  <Plus className="w-3.5 h-3.5" />
                )}
                {skillName}
              </button>
            );
          })}
        </motion.div>
      </motion.div>

      {data.skills.length === 0 && (
        <motion.p variants={item} className="text-center text-muted-foreground text-sm py-8">
          Click on skills above to add them to your profile. You can rate your proficiency level for each skill.
        </motion.p>
      )}
    </motion.div>
  );
};

export default SkillProfilingStep;
