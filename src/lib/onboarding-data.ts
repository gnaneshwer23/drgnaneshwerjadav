// Onboarding data types and constants

export interface OnboardingData {
  // Step 1: Career Assessment
  currentStatus: string;
  educationLevel: string;
  fieldOfStudy: string;
  yearsExperience: string;
  interests: string[];
  
  // Step 2: Skill Profiling
  skills: SkillEntry[];
  
  // Step 3: Goal Definition
  careerGoal: string;
  targetRole: string;
  timeline: string;
  priorities: string[];
}

export interface SkillEntry {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

export const initialOnboardingData: OnboardingData = {
  currentStatus: "",
  educationLevel: "",
  fieldOfStudy: "",
  yearsExperience: "",
  interests: [],
  skills: [],
  careerGoal: "",
  targetRole: "",
  timeline: "",
  priorities: [],
};

export const statusOptions = [
  { value: "student", label: "Student", icon: "🎓" },
  { value: "fresher", label: "Fresh Graduate", icon: "📄" },
  { value: "working", label: "Working Professional", icon: "💼" },
  { value: "career-switch", label: "Career Switcher", icon: "🔄" },
  { value: "unemployed", label: "Seeking Opportunities", icon: "🔍" },
  { value: "entrepreneur", label: "Entrepreneur / Founder", icon: "🚀" },
];

export const educationOptions = [
  { value: "high-school", label: "High School" },
  { value: "diploma", label: "Diploma" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree" },
  { value: "phd", label: "PhD / Doctorate" },
  { value: "self-taught", label: "Self-Taught" },
];

export const fieldOptions = [
  "Engineering", "Computer Science", "Business / MBA", "Arts & Humanities",
  "Science", "Medicine / Health", "Law", "Design", "Commerce / Finance",
  "Education", "Agriculture", "Other",
];

export const experienceOptions = [
  { value: "0", label: "No experience" },
  { value: "0-2", label: "0–2 years" },
  { value: "2-5", label: "2–5 years" },
  { value: "5-10", label: "5–10 years" },
  { value: "10+", label: "10+ years" },
];

export const interestOptions = [
  "Technology & AI", "Data Science", "Product Management", "Marketing",
  "Design & UX", "Finance & Banking", "Healthcare", "Education",
  "Government & Policy", "Entrepreneurship", "Sustainability",
  "Manufacturing", "Sales & BD", "Content & Media",
];

export const skillCategories = [
  {
    category: "Technical",
    skills: [
      "Python", "JavaScript", "Java", "SQL", "Machine Learning",
      "Data Analysis", "Cloud Computing", "Cybersecurity", "DevOps",
      "Mobile Development",
    ],
  },
  {
    category: "Business",
    skills: [
      "Project Management", "Strategic Planning", "Financial Analysis",
      "Business Development", "Market Research", "Operations",
      "Supply Chain", "HR Management",
    ],
  },
  {
    category: "Creative & Soft",
    skills: [
      "Communication", "Leadership", "Problem Solving", "Critical Thinking",
      "Design Thinking", "Public Speaking", "Negotiation", "Team Collaboration",
    ],
  },
];

export const goalOptions = [
  { value: "first-job", label: "Land my first job", icon: "🎯" },
  { value: "upskill", label: "Upskill in current role", icon: "📈" },
  { value: "career-switch", label: "Switch careers", icon: "🔄" },
  { value: "leadership", label: "Move into leadership", icon: "👑" },
  { value: "freelance", label: "Start freelancing", icon: "💻" },
  { value: "startup", label: "Build a startup", icon: "🚀" },
];

export const targetRoles = [
  "Software Developer", "Data Analyst", "Product Manager",
  "UX Designer", "Business Analyst", "Marketing Manager",
  "Operations Manager", "Consultant", "Research Scientist",
  "Policy Analyst", "Entrepreneur", "Other",
];

export const timelineOptions = [
  { value: "3-months", label: "3 months" },
  { value: "6-months", label: "6 months" },
  { value: "1-year", label: "1 year" },
  { value: "2-years", label: "2 years" },
  { value: "flexible", label: "Flexible" },
];

export const priorityOptions = [
  "Higher salary", "Work-life balance", "Career growth",
  "Learning new skills", "Job security", "Making an impact",
  "Remote work", "Leadership opportunities",
];
