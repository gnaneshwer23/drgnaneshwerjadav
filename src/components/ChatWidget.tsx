import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";
import ChatTranscript from "@/components/ChatTranscript";

const ChatWidget = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  if (location.pathname === "/chat") return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[min(32rem,70vh)] w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-saffron/25 bg-navy shadow-saffron">
          <div className="flex items-center justify-between border-b border-primary-foreground/10 px-4 py-3">
            <div>
              <p className="font-heading text-sm font-bold text-primary-foreground">
                DrJadav
              </p>
              <p className="text-xs text-primary-foreground/50">
                Work, books, and booking
              </p>
            </div>
            <Link
              to="/chat"
              className="text-xs font-medium text-saffron hover:underline"
            >
              Open page
            </Link>
          </div>
          <div className="flex min-h-0 flex-1 flex-col px-4 py-3">
            <ChatTranscript layout="widget" />
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Ask me anything"}
        className="flex min-h-14 items-center justify-center rounded-full bg-[#2196f3] px-4 text-white shadow-[0_8px_24px_rgba(33,150,243,0.35)]"
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <span className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <span className="hidden pr-1 text-sm font-medium sm:inline">Ask me anything</span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
