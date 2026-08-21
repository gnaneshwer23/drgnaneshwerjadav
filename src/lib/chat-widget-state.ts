const STORAGE_KEY = "drjadav-chat-widget";

export type ChatWidgetMode = "minimized" | "open";

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
