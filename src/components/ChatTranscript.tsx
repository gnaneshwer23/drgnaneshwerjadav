import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useMemo, useState } from "react";
import { ArrowUp, Square } from "lucide-react";
import { chatStarterPrompts } from "@/lib/chat-prompts";
import { ChatHandoff, ChatLinkedText } from "@/lib/chat-links";

type ChatTranscriptProps = {
  layout?: "page" | "widget";
};

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

  return (
    <div className={`flex min-h-0 flex-1 flex-col ${isPage ? "gap-8" : "gap-4"}`}>
      <div
        className={`min-h-0 flex-1 space-y-5 overflow-y-auto pr-1 ${
          isPage ? "max-h-[min(60vh,36rem)]" : "max-h-80"
        }`}
        aria-live="polite"
      >
        {messages.length === 0 && (
          <div className="space-y-4">
            <p
              className={
                isPage
                  ? "text-base leading-relaxed text-primary-foreground/70"
                  : "text-sm leading-relaxed text-primary-foreground/70"
              }
            >
              Ask about the work, the books, or how to book a DrJadav consult.
            </p>
            <div className="flex flex-wrap gap-2">
              {chatStarterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => submit(prompt)}
                  className="min-h-11 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-left text-sm text-primary-foreground/85 transition-colors hover:border-saffron/40 hover:text-saffron"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <article
            key={message.id}
            className={
              message.role === "user"
                ? "ml-8 rounded-2xl border border-saffron/25 bg-saffron/10 px-4 py-3"
                : "mr-4 border-l-2 border-saffron/40 pl-4"
            }
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-saffron">
              {message.role === "user" ? "You" : "DrJadav"}
            </p>
            <div className="space-y-3 text-sm leading-relaxed text-primary-foreground/90 md:text-[15px]">
              {message.parts.map((part, index) =>
                part.type === "text" ? (
                  <p key={`${message.id}-${index}`} className="whitespace-pre-wrap">
                    <ChatLinkedText text={part.text} />
                  </p>
                ) : null,
              )}
            </div>
            {message.role === "assistant" &&
              messages[messages.length - 1]?.id === message.id &&
              status === "ready" && <ChatHandoff />}
          </article>
        ))}

        {status === "submitted" && (
          <p className="text-sm text-primary-foreground/50">Thinking…</p>
        )}
        {error && (
          <p className="text-sm text-destructive">
            The guide could not reply. Check that AI Gateway is enabled, then try again.
          </p>
        )}
      </div>

      <form
        className="flex items-end gap-2 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-2"
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
          placeholder="Ask about the work, books, or a consult…"
          className="min-h-11 flex-1 resize-none bg-transparent px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none"
        />
        {busy ? (
          <button
            type="button"
            onClick={() => stop()}
            aria-label="Stop generating"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-primary-foreground/20 text-primary-foreground"
          >
            <Square className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send message"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-xl bg-saffron-gradient text-accent-foreground disabled:opacity-40"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}
      </form>
    </div>
  );
};

export default ChatTranscript;
