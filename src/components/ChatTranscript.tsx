import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useMemo, useState } from "react";
import { ArrowUp, Square } from "lucide-react";
import { chatStarterPrompts } from "@/lib/chat-prompts";
import { ChatActions } from "@/lib/chat-links";
import { citedSources } from "@/lib/chat-intent";
import { MessageResponse } from "@/components/ai-elements/message";
import ChatAvatar from "@/components/ChatAvatar";

type ChatTranscriptProps = {
  layout?: "page" | "widget";
};

function messageText(message: { parts: Array<{ type: string; text?: string }> }) {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text ?? "")
    .join("\n");
}

const ChatTranscript = ({ layout = "page" }: ChatTranscriptProps) => {
  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat" }),
    [],
  );
  const { messages, sendMessage, status, stop, error } = useChat({ transport });
  const [input, setInput] = useState("");
  const busy = status === "submitted" || status === "streaming";

  const submit = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  const isPage = layout === "page";
  const userMessages = messages
    .filter((message) => message.role === "user")
    .map(messageText);
  const lastAssistant = [...messages]
    .reverse()
    .find((message) => message.role === "assistant");

  return (
    <div className={`flex min-h-0 flex-1 flex-col ${isPage ? "gap-6" : "gap-4"}`}>
      <div
        className={`min-h-0 flex-1 space-y-5 overflow-y-auto overscroll-contain pr-1 ${
          isPage ? "max-h-[min(62vh,36rem)]" : ""
        }`}
        aria-live="polite"
      >
        {messages.length === 0 && (
          <div className="space-y-4">
            <p
              className={
                isPage
                  ? "text-base leading-relaxed text-muted-foreground"
                  : "text-sm leading-relaxed text-muted-foreground"
              }
            >
              Talk with DrJadav about projects, experience, education, skills, books, the course, frameworks, or a consult.
            </p>
            <div className="flex flex-wrap gap-2">
              {chatStarterPrompts.map((item) => (
                <button
                  key={item.prompt}
                  type="button"
                  onClick={() => submit(item.prompt)}
                  className="min-h-11 rounded-full border border-border bg-card px-4 py-2 text-left font-mono text-[11px] tracking-wide text-foreground transition-colors hover:border-foreground/40"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => {
          const text = messageText(message);
          const isLastAssistant =
            message.role === "assistant" && lastAssistant?.id === message.id;
          const streaming = isLastAssistant && busy;
          const sources =
            message.role === "assistant" && isLastAssistant && status === "ready"
              ? citedSources(text)
              : [];

          return (
            <article
              key={message.id}
              className={
                message.role === "user"
                  ? "ml-8 rounded-2xl bg-secondary px-4 py-3"
                  : "mr-4 flex gap-3"
              }
            >
              {message.role === "assistant" ? (
                <ChatAvatar size="xs" className="mt-0.5" />
              ) : null}
              <div className="min-w-0 flex-1">
              <p className="mb-1 font-mono text-[10px] font-medium tracking-[0.14em] text-muted-foreground">
                {message.role === "user" ? "YOU" : "DRJADAV"}
                {streaming ? " · STREAMING" : ""}
              </p>
              <div
                className={`space-y-3 text-sm leading-relaxed text-foreground md:text-[15px] ${
                  streaming ? "streaming-caret" : ""
                }`}
              >
                {message.parts.map((part, index) =>
                  part.type === "text" ? (
                    <p key={`${message.id}-${index}`} className="whitespace-pre-wrap">
                      <MessageResponse>{part.text}</MessageResponse>
                    </p>
                  ) : null,
                )}
              </div>
              {sources.length > 0 ? (
                <p className="mt-3 font-mono text-[10px] tracking-[0.12em] text-muted-foreground">
                  SOURCE · {sources.join(" · ")}
                </p>
              ) : null}
              {message.role === "assistant" &&
                isLastAssistant &&
                status === "ready" && (
                  <ChatActions
                    userMessages={userMessages}
                    lastAssistant={text}
                  />
                )}
              </div>
            </article>
          );
        })}

        {status === "submitted" && messages.at(-1)?.role === "user" ? (
          <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
            <span
              className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-saffron"
              aria-hidden="true"
            />
            STREAMING
          </p>
        ) : null}
        {error && (
          <p className="text-sm text-destructive">
            The desk could not reply. Check that AI Gateway is enabled, then try again.
          </p>
        )}
      </div>

      <form
        className="flex items-end gap-2 rounded-2xl border border-border bg-card p-2"
        onSubmit={(event) => {
          event.preventDefault();
          submit(input);
        }}
      >
        <label htmlFor={`chat-input-${layout}`} className="sr-only">
          Message
        </label>
        <textarea
          id={`chat-input-${layout}`}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              submit(input);
            }
          }}
          disabled={status === "error"}
          rows={isPage ? 3 : 2}
          placeholder="Message DrJadav about work, books, or a consult…"
          className="min-h-11 flex-1 resize-none bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        {busy ? (
          <button
            type="button"
            onClick={() => stop()}
            aria-label="Stop generating"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-foreground"
          >
            <Square className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send message"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full bg-navy text-white disabled:opacity-40"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}
      </form>
    </div>
  );
};

export default ChatTranscript;
