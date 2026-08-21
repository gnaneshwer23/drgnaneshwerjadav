import { useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Minus } from "lucide-react";
import ChatTranscript from "@/components/ChatTranscript";
import {
  readChatWidgetMode,
  writeChatWidgetMode,
  type ChatWidgetMode,
} from "@/lib/chat-widget-state";

const ChatWidget = () => {
  const location = useLocation();
  const titleId = useId();
  const [mode, setMode] = useState<ChatWidgetMode>(() =>
    typeof window === "undefined" ? "minimized" : readChatWidgetMode(),
  );

  const setPersistedMode = (next: ChatWidgetMode) => {
    setMode(next);
    writeChatWidgetMode(next);
  };

  if (location.pathname === "/chat") return null;

  const open = mode === "open";

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="pointer-events-auto absolute inset-x-0 bottom-0 flex h-[min(70dvh,36rem)] flex-col overflow-hidden rounded-t-3xl border border-saffron/25 bg-navy shadow-saffron md:inset-auto md:bottom-5 md:right-5 md:h-[min(32rem,70dvh)] md:w-[min(24rem,calc(100vw-2.5rem))] md:rounded-2xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-1 border-b border-primary-foreground/10 px-2 py-1.5">
            <div className="min-w-0 flex-1 px-2 py-1">
              <p
                id={titleId}
                className="font-heading truncate text-sm font-bold text-primary-foreground"
              >
                Ask DrJadav
              </p>
              <p className="truncate text-xs text-primary-foreground/50">
                Work, products, and books
              </p>
            </div>
            <div className="flex shrink-0 items-center">
              <Link
                to="/chat"
                className="inline-flex min-h-11 items-center rounded-lg px-3 text-xs font-semibold text-saffron hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
              >
                Full page
              </Link>
              <button
                type="button"
                onClick={() => setPersistedMode("minimized")}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg px-3 text-xs font-semibold text-primary-foreground hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                aria-label="Minimise chat"
              >
                <Minus className="h-4 w-4" aria-hidden="true" />
                Minimise
              </button>
            </div>
          </div>
          <div className="flex min-h-0 flex-1 flex-col px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <ChatTranscript layout="widget" />
          </div>
        </div>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => setPersistedMode("open")}
          aria-expanded={false}
          aria-label="Open chat"
          className="pointer-events-auto absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-saffron-gradient px-4 text-sm font-semibold text-accent-foreground shadow-saffron transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Ask
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
