import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatTranscript from "@/components/ChatTranscript";

const Chat = () => {
  return (
    <main className="flex min-h-dvh flex-col bg-navy">
      <Navbar />
      <div className="container mx-auto flex max-w-6xl flex-1 flex-col px-4 pb-16 pt-24 sm:px-6 sm:pt-28">
        <p className="eyebrow">Guide</p>
        <h1 className="display max-w-3xl text-primary-foreground">
          Ask about the work, the products, and the books in progress.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/65">
          This guide answers from Gnaneshwer’s public profile and compact notes
          on his Product Book 2026 manuscripts. It will say when it does not know.
        </p>
        <div className="mt-8 flex min-h-0 flex-1 flex-col rounded-2xl border border-primary-foreground/10 bg-navy-dark/60 p-4 sm:mt-10 sm:p-6 md:p-8">
          <ChatTranscript layout="page" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Chat;
