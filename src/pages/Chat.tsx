import ChatTranscript from "@/components/ChatTranscript";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";

const Chat = () => {
  return (
    <StorefrontLayout tone="navy">
      <PageShell className="flex flex-1 flex-col pb-16">
        <Eyebrow>DrJadav</Eyebrow>
        <PageTitle tone="navy">
          Ask about the work, the books, and how to book.
        </PageTitle>
        <PageLead tone="navy">
          Short strategy from the public profile and Product Book 2026 notes —
          then a handoff to Book or Shop. It will say when it does not know.
        </PageLead>
        <div className="mt-10 flex min-h-0 flex-1 flex-col rounded-2xl border border-primary-foreground/10 bg-navy-dark/60 p-5 md:p-8">
          <ChatTranscript layout="page" />
        </div>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Chat;
