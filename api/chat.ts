import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";
import { SYSTEM_INSTRUCTIONS } from "./knowledge";

export const maxDuration = 30;

const MODEL = "anthropic/claude-sonnet-4.6";

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();
    const recent = Array.isArray(messages) ? messages.slice(-16) : [];

    const result = streamText({
      model: MODEL,
      instructions: SYSTEM_INSTRUCTIONS,
      messages: await convertToModelMessages(recent),
      maxOutputTokens: 900,
      providerOptions: {
        gateway: {
          tags: ["feature:portfolio-chat"],
        },
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("portfolio chat failed", error);
    return new Response("Chat is unavailable right now.", { status: 500 });
  }
}
