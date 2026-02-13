import { useMemo } from "react";
import { OnboardingData, initialOnboardingData, statusOptions, educationOptions, goalOptions, timelineOptions } from "./onboarding-data";

export interface DashboardProfile {
  name: string;
  status: string;
  role: string;
  education: string;
  experience: string;
  goal: string;
  timeline: string;
}

export interface DashboardSkill {
  name: string;
  level: number;
}

function levelToPercent(level: string): number {
  switch (level) {
    case "beginner": return 25;
    case "intermediate": return 50;
    case "advanced": return 75;
    case "expert": return 95;
    default: return 30;
  }
}

export function useOnboardingProfile() {
  return useMemo(() => {
    const raw = localStorage.getItem("onboarding-data");
    const data: OnboardingData = raw ? JSON.parse(raw) : initialOnboardingData;
    const hasData = !!raw;

    const profile: DashboardProfile = {
      name: "Career Explorer",
      status: (statusOptions.find((s) => s.value === data.currentStatus)?.label ?? data.currentStatus) || "Not set",
      role: data.targetRole || "Not set",
      education: `${(educationOptions.find((e) => e.value === data.educationLevel)?.label ?? data.educationLevel) || "N/A"} · ${data.fieldOfStudy || "N/A"}`,
      experience: data.yearsExperience ? `${data.yearsExperience} years` : "Not set",
      goal: (goalOptions.find((g) => g.value === data.careerGoal)?.label ?? data.careerGoal) || "Not set",
      timeline: (timelineOptions.find((t) => t.value === data.timeline)?.label ?? data.timeline) || "Not set",
    };

    const skills: DashboardSkill[] = data.skills.map((s) => ({
      name: s.name,
      level: levelToPercent(s.level),
    }));

    return { profile, skills, data, hasData };
  }, []);
}
