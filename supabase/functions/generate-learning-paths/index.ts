import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { profile, skills } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are a career development AI for the Accountable Hindustan platform. Given a user's career profile and skills, generate exactly 3 personalized learning path recommendations.

Each learning path should:
- Be directly relevant to closing the gap between current skills and the target role
- Include a clear title, description, number of modules, estimated duration, and a tag (one of: "Recommended", "Skill Gap", "Trending")
- Be actionable and specific to the Indian workforce context

Return your response using the suggest_paths tool.`;

    const userPrompt = `User Profile:
- Status: ${profile.status}
- Target Role: ${profile.role}
- Education: ${profile.education}
- Experience: ${profile.experience}
- Goal: ${profile.goal}
- Timeline: ${profile.timeline}

Current Skills:
${skills.map((s: { name: string; level: number }) => `- ${s.name}: ${s.level}%`).join("\n")}

Generate 3 personalized learning paths to help this user reach their goal.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "suggest_paths",
              description: "Return exactly 3 personalized learning path recommendations.",
              parameters: {
                type: "object",
                properties: {
                  paths: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        title: { type: "string" },
                        description: { type: "string" },
                        modules: { type: "number" },
                        duration: { type: "string" },
                        tag: { type: "string", enum: ["Recommended", "Skill Gap", "Trending"] },
                      },
                      required: ["title", "description", "modules", "duration", "tag"],
                      additionalProperties: false,
                    },
                  },
                },
                required: ["paths"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "suggest_paths" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      return new Response(JSON.stringify({ error: "No tool call in response" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const paths = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify(paths), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-learning-paths error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
