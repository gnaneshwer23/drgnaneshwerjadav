import chatArt from "@/assets/drjadav-chat.png";
import { cn } from "@/lib/utils";

/**
 * DrJadav chat illustration: src/assets/drjadav-chat.png
 * Overwrite that file to swap the forthcoming / replacement chat photo.
 * Do not use this as the homepage professional portrait (that stays profile.jpg).
 *
 * Circular crops zoom to Gnaneshwer’s face — upper-right of this drawing
 * (red cap, smile), not the toddler or the cricket bat.
 */
export const CHAT_AVATAR_ALT =
  "Warm illustration of Dr Gnaneshwer Jadav with a toddler holding a cricket bat.";

type ChatAvatarProps = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
};

const sizeClass = {
  xs: "h-7 w-7",
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-[4.5rem] w-[4.5rem]",
};

export default function ChatAvatar({ className, size = "md" }: ChatAvatarProps) {
  return (
    <span
      className={cn(
        "chat-avatar relative inline-flex shrink-0 overflow-hidden rounded-full bg-secondary ring-1 ring-border",
        sizeClass[size],
        className,
      )}
    >
      <img
        src={chatArt}
        alt={CHAT_AVATAR_ALT}
        width={512}
        height={768}
        className="chat-avatar-photo h-full w-full"
      />
    </span>
  );
}
