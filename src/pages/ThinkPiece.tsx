import { Link, Navigate, useParams } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { thinkBySlug } from "@/data/thinking";

const ThinkPiece = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? thinkBySlug(slug) : undefined;

  if (!item) {
    return <Navigate to="/think" replace />;
  }

  return (
    <StorefrontLayout>
      <Seo title={item.title} description={item.dek} path={`/think/${item.slug}`} />
      <PageShell>
        <Eyebrow>{item.date}</Eyebrow>
        <PageTitle>{item.title}</PageTitle>
        <PageLead>{item.dek}</PageLead>
        <div className="mt-10 max-w-2xl space-y-5 text-base leading-[1.8] text-foreground/90">
          {item.body.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>
        {item.related ? (
          <Link
            to={item.related}
            className="mt-10 inline-flex min-h-11 items-center text-sm underline decoration-foreground/30 underline-offset-[6px]"
          >
            Related
          </Link>
        ) : null}
      </PageShell>
    </StorefrontLayout>
  );
};

export default ThinkPiece;
