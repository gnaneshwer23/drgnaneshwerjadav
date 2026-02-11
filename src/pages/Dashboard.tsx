import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Target,
  Zap,
  TrendingUp,
  BookOpen,
  Award,
  Clock,
  ChevronRight,
  Star,
  Users,
  BarChart3,
  Briefcase,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

// Mock data — would come from DB after onboarding
const profile = {
  name: "Priya Sharma",
  status: "Working Professional",
  role: "Software Developer",
  education: "Bachelor's Degree · Computer Science",
  experience: "2–5 years",
  goal: "Move into leadership",
  timeline: "1 year",
};

const trustScore = {
  overall: 72,
  components: [
    { label: "Skills Verified", value: 80, icon: Zap },
    { label: "Projects Completed", value: 60, icon: Award },
    { label: "Peer Validations", value: 65, icon: Users },
    { label: "Consistency", value: 85, icon: TrendingUp },
  ],
};

const skills = [
  { name: "JavaScript", level: 78 },
  { name: "Python", level: 65 },
  { name: "Leadership", level: 45 },
  { name: "System Design", level: 55 },
  { name: "Communication", level: 82 },
  { name: "Cloud Computing", level: 40 },
];

const learningPaths = [
  {
    title: "Engineering Leadership",
    description: "Transition from IC to engineering manager with decision labs and team simulations.",
    modules: 12,
    duration: "8 weeks",
    progress: 25,
    tag: "Recommended",
  },
  {
    title: "System Design Mastery",
    description: "Build scalable architectures with real-world project assignments.",
    modules: 10,
    duration: "6 weeks",
    progress: 0,
    tag: "Skill Gap",
  },
  {
    title: "Cloud & DevOps Foundations",
    description: "AWS, Docker, CI/CD pipelines, and infrastructure-as-code modules.",
    modules: 8,
    duration: "5 weeks",
    progress: 10,
    tag: "Trending",
  },
];

const upcomingActions = [
  { label: "Complete Python project submission", due: "2 days", icon: Target },
  { label: "Leadership simulation: Crisis Response", due: "5 days", icon: Shield },
  { label: "Peer review: Cloud Architecture", due: "1 week", icon: Users },
];

const Dashboard = () => {
  const navigate = useNavigate();

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
            <span className="text-sm font-medium hidden sm:inline">Home</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-saffron-gradient flex items-center justify-center">
              <span className="font-heading text-xs font-bold text-accent-foreground">AH</span>
            </div>
            <span className="font-heading text-sm font-bold text-foreground">Dashboard</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-heading text-xs font-bold">
            PS
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
          {/* Welcome */}
          <motion.div variants={item}>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Welcome back, {profile.name.split(" ")[0]} 👋
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Here's your career progress at a glance.
            </p>
          </motion.div>

          {/* Top row: Profile + Trust Score */}
          <div className="grid gap-6 lg:grid-cols-5">
            {/* Career Profile Card */}
            <motion.div
              variants={item}
              className="lg:col-span-2 rounded-xl border border-border bg-card p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-heading text-lg font-bold text-foreground">{profile.name}</h2>
                  <p className="text-xs text-muted-foreground">{profile.status}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Target Role</span>
                  <span className="font-medium text-foreground">{profile.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Education</span>
                  <span className="font-medium text-foreground">{profile.education}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium text-foreground">{profile.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Goal</span>
                  <span className="font-medium text-accent">{profile.goal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Timeline</span>
                  <span className="font-medium text-foreground">{profile.timeline}</span>
                </div>
              </div>
            </motion.div>

            {/* Trust Score Card */}
            <motion.div
              variants={item}
              className="lg:col-span-3 rounded-xl border border-border bg-card p-6 space-y-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Trust Score
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading text-3xl font-bold text-accent">
                    {trustScore.overall}
                  </span>
                  <span className="text-xs text-muted-foreground">/100</span>
                </div>
              </div>
              <Progress value={trustScore.overall} className="h-2.5 bg-muted" />
              <div className="grid grid-cols-2 gap-4">
                {trustScore.components.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground truncate">{c.label}</span>
                        <span className="text-xs font-semibold text-foreground">{c.value}%</span>
                      </div>
                      <Progress value={c.value} className="h-1.5 bg-muted" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Progress */}
          <motion.div variants={item} className="rounded-xl border border-border bg-card p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                Skill Progress
              </h3>
              <span className="text-xs text-muted-foreground">{skills.length} skills tracked</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs font-semibold text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-full rounded-full"
                      style={{
                        background:
                          skill.level >= 70
                            ? "hsl(var(--emerald))"
                            : skill.level >= 50
                            ? "hsl(var(--saffron))"
                            : "hsl(var(--muted-foreground) / 0.4)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Learning Paths + Actions */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Learning Paths */}
            <motion.div
              variants={item}
              className="lg:col-span-2 rounded-xl border border-border bg-card p-6 space-y-5"
            >
              <h3 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent" />
                Recommended Learning Paths
              </h3>
              <div className="space-y-4">
                {learningPaths.map((path) => (
                  <div
                    key={path.title}
                    className="group p-4 rounded-lg border border-border hover:border-accent/30 hover:shadow-card transition-all cursor-pointer"
                  >
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
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" />
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
                ))}
              </div>
            </motion.div>

            {/* Upcoming Actions */}
            <motion.div
              variants={item}
              className="rounded-xl border border-border bg-card p-6 space-y-5"
            >
              <h3 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                Upcoming Actions
              </h3>
              <div className="space-y-3">
                {upcomingActions.map((action) => (
                  <div
                    key={action.label}
                    className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-accent/30 transition-colors cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <action.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{action.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Due in {action.due}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
