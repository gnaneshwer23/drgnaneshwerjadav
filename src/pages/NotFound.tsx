import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-dvh items-center justify-center bg-background px-6">
      <Seo title="Not found" description="That URL does not exist on this site." path={location.pathname} />
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="font-heading mt-4 text-4xl font-medium text-foreground">
          Page not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          That URL does not exist on this site.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
