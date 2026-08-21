import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatTranscript from "@/components/ChatTranscript";
import ChatAvatar, { CHAT_AVATAR_ALT } from "@/components/ChatAvatar";
import Seo from "@/components/Seo";

const Chat = () => {
  return (
    <main className="flex min-h-dvh flex-col bg-background">
      <Seo
        title="DrJadav"
        description="Talk with DrJadav about Gnaneshwer’s work, books, and consult. Payment stays on /book."
        path="/chat"
      />
      <Navbar />
      <div className="site-wrap flex flex-1 flex-col pb-16 pt-28 sm:pt-32">
        <div className="max-w-2xl">
          <ChatAvatar size="md" />
          <p className="font-mono mt-5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Chat
          </p>
          <h1 className="font-heading mt-3 text-[clamp(2rem,4vw,2.75rem)] font-medium tracking-[-0.04em] text-foreground">
            DrJadav
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Answers from Gnaneshwer’s public profile and Product Book 2026
            notes. It will say when it does not know. Payment stays on /book —
            not here.
          </p>
          <p className="sr-only">{CHAT_AVATAR_ALT}</p>
        </div>
        <div className="mt-10 flex min-h-0 max-w-2xl flex-1 flex-col">
          <ChatTranscript layout="page" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Chat;
