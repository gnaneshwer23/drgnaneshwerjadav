import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatTranscript from "@/components/ChatTranscript";
import Seo from "@/components/Seo";

const Chat = () => {
  return (
    <main className="flex min-h-dvh flex-col bg-background">
      <Seo
        title="Ask"
        description="Ask about Gnaneshwer’s work, books, and consult. Payment stays on /book."
        path="/chat"
      />
      <Navbar />
      <div className="container mx-auto flex max-w-3xl flex-1 flex-col px-4 pb-16 pt-24 sm:px-6 sm:pt-28">
        <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-muted-foreground">
          GUIDE
        </p>
        <h1 className="font-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ask DrJadav
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          Answers from Gnaneshwer’s public profile and Product Book 2026 notes.
          It will say when it does not know. Payment stays on /book — not here.
        </p>
        <div className="mt-8 flex min-h-0 flex-1 flex-col">
          <ChatTranscript layout="page" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Chat;
