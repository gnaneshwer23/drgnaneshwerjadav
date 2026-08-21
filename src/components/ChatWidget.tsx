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
          className="pointer-events-auto absolute inset-x-0 bottom-0 flex h-[min(70dvh,36rem)] flex-col overflow-hidden rounded-t-3xl border border-border bg-card md:inset-auto md:bottom-5 md:right-5 md:h-[min(32rem,70dvh)] md:w-[min(24rem,calc(100vw-2.5rem))] md:rounded-2xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-1 bg-navy px-2 py-1.5 text-white">
            <div className="flex min-w-0 flex-1 items-center gap-2 px-1 py-1">
              <ChatAvatar size="md" className="ring-white/20" />
              <div className="min-w-0">
                <p
                  id={titleId}
                  className="font-heading truncate text-base font-semibold"
                >
                  DrJadav
                </p>
                <p className="truncate font-mono text-[10px] tracking-[0.14em] text-white/60">
                  WORK · BOOKS · CONSULT
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center">
              <Link
                to="/chat"
                className="inline-flex min-h-11 items-center rounded-lg px-3 font-mono text-[10px] tracking-wide text-white underline underline-offset-4 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Full desk
              </Link>
              <button
                type="button"
                onClick={() => setPersistedMode("minimized")}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg px-3 font-mono text-[10px] tracking-wide text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Minimise DrJadav"
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
          aria-label="Open DrJadav"
          className="pointer-events-auto absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-navy py-1 pl-1 pr-4 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ChatAvatar size="sm" className="ring-white/25" />
          DrJadav
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
