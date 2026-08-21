/**
 * Floating DrJadav dock. Avatar: src/assets/drjadav-chat.png
 * Overwrite that file to swap the chat illustration. Homepage portrait is profile.jpg.
 */
import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Minus } from "lucide-react";
import ChatTranscript from "@/components/ChatTranscript";
import ChatAvatar from "@/components/ChatAvatar";
import {
  CHAT_OPEN_EVENT,
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

  useEffect(() => {
    const onOpen = () => setPersistedMode("open");
    window.addEventListener(CHAT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CHAT_OPEN_EVENT, onOpen);
  }, []);

  if (location.pathname === "/chat") return null;

  const open = mode === "open";

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="pointer-events-auto absolute inset-x-0 bottom-0 flex h-[min(70dvh,36rem)] flex-col overflow-hidden rounded-t-2xl border border-border bg-card text-foreground shadow-[0_24px_60px_-32px_rgba(0,0,0,0.45)] md:inset-auto md:bottom-5 md:right-5 md:h-[min(32rem,70dvh)] md:w-[min(22.5rem,calc(100vw-2.5rem))] md:rounded-xl"
        >
          <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
            <div className="flex min-w-0 flex-1 items-center gap-2 px-1">
              <ChatAvatar size="sm" />
              <p
                id={titleId}
                className="font-heading truncate text-[13px] font-medium tracking-[-0.01em]"
              >
                DrJadav
              </p>
            </div>
            <div className="flex shrink-0 items-center">
              <Link
                to="/chat"
                className="inline-flex min-h-10 items-center px-2.5 text-[12px] tracking-[-0.01em] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Full desk
              </Link>
              <button
                type="button"
                onClick={() => setPersistedMode("minimized")}
                className="inline-flex min-h-10 items-center justify-center rounded-lg px-2.5 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Minimise DrJadav"
              >
                <Minus className="h-4 w-4" aria-hidden="true" />
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
          aria-label="Open DrJadav"
          className="pointer-events-auto absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/[0.1] bg-[#0c0c0b] py-1 pl-1 pr-3.5 text-[13px] font-medium tracking-[-0.01em] text-[#f4f1ea] transition-colors hover:bg-[#161615] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          <ChatAvatar size="sm" className="ring-white/15" />
          DrJadav
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
