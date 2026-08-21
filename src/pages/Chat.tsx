import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatTranscript from "@/components/ChatTranscript";

const Chat = () => {
  return (
    <main className="flex min-h-dvh flex-col bg-navy">
      <Navbar />
      <div className="container mx-auto flex flex-1 flex-col px-6 pb-16 pt-28">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
          Guide
        </p>
        <h1 className="font-heading max-w-3xl text-4xl font-bold text-primary-foreground md:text-5xl">
          Ask about the work, the products, and the books in progress.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/65">
          This guide answers from Gnaneshwer’s public profile and compact notes
          on his Product Book 2026 manuscripts. It will say when it does not know.
        </p>
        <div className="mt-10 flex min-h-0 flex-1 flex-col rounded-2xl border border-primary-foreground/10 bg-navy-dark/60 p-5 md:p-8">
          <ChatTranscript layout="page" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Chat;
