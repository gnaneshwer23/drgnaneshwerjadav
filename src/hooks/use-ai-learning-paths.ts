import { useState, useEffect } from "react";

export interface LearningPath {
  title: string;
  description: string;
  modules: number;
  duration: string;
  tag: "Recommended" | "Skill Gap" | "Trending";
  progress: number;
}

interface ProfileInput {
  status: string;
  role: string;
  education: string;
  experience: string;
  goal: string;
  timeline: string;
}

interface SkillInput {
  name: string;
  level: number;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export function useAILearningPaths(profile: ProfileInput, skills: SkillInput[], hasData: boolean) {
  const [paths, setPaths] = useState<LearningPath[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!hasData || skills.length === 0) return;

    const cacheKey = "ai-learning-paths";
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      setPaths(JSON.parse(cached));
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`${SUPABASE_URL}/functions/v1/generate-learning-paths`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
      body: JSON.stringify({ profile, skills }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.error || `Error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const result: LearningPath[] = (data.paths || []).map((p: any) => ({
          ...p,
          progress: 0,
        }));
        setPaths(result);
        sessionStorage.setItem(cacheKey, JSON.stringify(result));
      })
      .catch((err) => {
        if (cancelled) return;
        console.error("AI learning paths error:", err);
        setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [hasData]);

  return { paths, loading, error };
}
