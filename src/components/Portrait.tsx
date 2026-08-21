import portrait from "@/assets/profile.jpg";
import { cn } from "@/lib/utils";

/**
 * Professional homepage / about portrait: src/assets/profile.jpg
 * Source is a 1:1 circular headshot on a black square.
 * Do not force 4:5 — that cropped the circle’s sides and clipped the crown.
 *
 * Chat illustration is a separate file: src/assets/drjadav-chat.png
 * Overwrite that PNG to swap the DrJadav chat photo. Do not use it here.
 */
type PortraitProps = {
  className?: string;
  size?: "hero" | "about";
  tone?: "paper" | "ink";
};

export default function Portrait({
  className,
  size = "hero",
  tone = "paper",
}: PortraitProps) {
  return (
    <figure className={cn("mx-auto w-full", className)}>
      <div
        className={cn(
          "portrait-frame relative overflow-hidden rounded-full",
          tone === "ink"
            ? "bg-transparent ring-1 ring-white/10"
            : "bg-white",
          size === "hero"
            ? "mx-auto aspect-square w-full max-w-[16.5rem] sm:max-w-[19rem] lg:max-w-[22rem]"
            : "aspect-square w-40 sm:w-48",
        )}
      >
        <img
          src={portrait}
          alt="Portrait of Dr Gnaneshwer Jadav"
          width={800}
          height={800}
          className="portrait-photo h-full w-full object-cover object-[center_18%]"
        />
      </div>
    </figure>
  );
}
