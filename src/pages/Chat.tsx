import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatTranscript from "@/components/ChatTranscript";
import ChatAvatar, { CHAT_AVATAR_ALT } from "@/components/ChatAvatar";
import Seo from "@/components/Seo";
import chatArt from "@/assets/drjadav-chat.png";

const Chat = () => {
  return (
    <main className="flex min-h-dvh flex-col bg-background">
      <Seo
        title="DrJadav"
        description="Talk with DrJadav about Gnaneshwer’s work, books, and consult. Payment stays on /book."
        path="/chat"
      />
      <Navbar />
      <div className="container mx-auto flex max-w-3xl flex-1 flex-col px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          <div className="pointer-events-none absolute inset-0">
            <img
              src={chatArt}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-[center_28%] opacity-[0.22]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          </div>
          <div className="relative px-6 py-8 sm:px-8 sm:py-10">
            <ChatAvatar size="lg" />
            <p className="font-mono mt-5 text-[11px] font-medium tracking-[0.18em] text-muted-foreground">
              CHAT
            </p>
            <h1 className="font-heading mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              DrJadav
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Answers from Gnaneshwer’s public profile and Product Book 2026
              notes. It will say when it does not know. Payment stays on /book —
              not here.
            </p>
            <p className="sr-only">{CHAT_AVATAR_ALT}</p>
          </div>
        </div>
        <div className="mt-8 flex min-h-0 flex-1 flex-col">
          <ChatTranscript layout="page" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Chat;
