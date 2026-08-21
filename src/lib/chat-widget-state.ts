const STORAGE_KEY = "drjadav-chat-widget";

export type ChatWidgetMode = "minimized" | "open";

export const CHAT_OPEN_EVENT = "drjadav-chat-open";

export function readChatWidgetMode(): ChatWidgetMode {
  try {
    const value = sessionStorage.getItem(STORAGE_KEY);
    if (value === "open" || value === "minimized") return value;
  } catch {
    /* private mode / blocked storage */
  }
  return "minimized";
}

export function writeChatWidgetMode(mode: ChatWidgetMode) {
  try {
    sessionStorage.setItem(STORAGE_KEY, mode);
  } catch {
    /* private mode / blocked storage */
  }
}

export function requestOpenChat() {
  writeChatWidgetMode("open");
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(CHAT_OPEN_EVENT));
  }
}
