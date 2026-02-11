import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/onboarding/OnboardingProgress";
import CareerAssessmentStep from "@/components/onboarding/CareerAssessmentStep";
import SkillProfilingStep from "@/components/onboarding/SkillProfilingStep";
import GoalDefinitionStep from "@/components/onboarding/GoalDefinitionStep";
import OnboardingSummary from "@/components/onboarding/OnboardingSummary";
import { OnboardingData, initialOnboardingData } from "@/lib/onboarding-data";

const steps = [
  { label: "Career", description: "Assessment" },
  { label: "Skills", description: "Profiling" },
  { label: "Goals", description: "Definition" },
  { label: "Summary", description: "Review" },
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(initialOnboardingData);
  const navigate = useNavigate();

  const updateData = (partial: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...partial }));
  };

  const canProceed = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          data.currentStatus &&
          data.educationLevel &&
          data.fieldOfStudy &&
          data.yearsExperience &&
          data.interests.length >= 1
        );
      case 1:
        return data.skills.length >= 1;
      case 2:
        return (
          data.careerGoal &&
          data.targetRole &&
          data.timeline &&
          data.priorities.length >= 1
        );
      case 3:
        return true;
      default:
        return false;
    }
  }, [currentStep, data]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  const handleFinish = () => {
    // In production, this would save to the database
    console.log("Onboarding complete:", data);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:inline">Back to Home</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-saffron-gradient flex items-center justify-center">
              <span className="font-heading text-xs font-bold text-accent-foreground">AH</span>
            </div>
            <span className="font-heading text-sm font-bold text-foreground">
              Career Onboarding
            </span>
          </div>
          <div className="text-xs text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-3xl">
        {/* Progress */}
        <div className="mb-10">
          <OnboardingProgress steps={steps} currentStep={currentStep} />
        </div>

        {/* Step Title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mb-8"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              {currentStep === 0 && "Tell us about yourself"}
              {currentStep === 1 && "Map your skills"}
              {currentStep === 2 && "Define your goals"}
              {currentStep === 3 && "Your career profile"}
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              {currentStep === 0 && "Help us understand your background so we can personalise your experience."}
              {currentStep === 1 && "Select your skills and rate your proficiency. We'll use this to build your trust score."}
              {currentStep === 2 && "Set your career objectives and timeline. This powers your personalised career pathway."}
              {currentStep === 3 && "Review your profile before we build your personalised career pathway."}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            {currentStep === 0 && (
              <CareerAssessmentStep data={data} onChange={updateData} />
            )}
            {currentStep === 1 && (
              <SkillProfilingStep data={data} onChange={updateData} />
            )}
            {currentStep === 2 && (
              <GoalDefinitionStep data={data} onChange={updateData} />
            )}
            {currentStep === 3 && <OnboardingSummary data={data} />}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="gap-2 bg-saffron-gradient text-accent-foreground font-semibold shadow-saffron hover:opacity-90 transition-opacity"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleFinish}
              className="gap-2 bg-saffron-gradient text-accent-foreground font-semibold shadow-saffron hover:opacity-90 transition-opacity"
            >
              <Sparkles className="w-4 h-4" />
              Launch My Career Path
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
