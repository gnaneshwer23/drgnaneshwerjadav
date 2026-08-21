import type { ReactNode } from "react";
import { ChatLinkedText } from "@/lib/chat-links";

/** Local AI Elements-shaped primitive for this Vite app (Tailwind 3.4). */
export function MessageResponse({ children }: { children: ReactNode }) {
  if (typeof children === "string") {
    return <ChatLinkedText text={children} />;
  }
  return <>{children}</>;
}
