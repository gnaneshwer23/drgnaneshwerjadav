import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-dvh items-center justify-center bg-navy px-6">
      <div className="max-w-md text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
          404
        </p>
        <h1 className="font-heading mt-4 text-4xl font-bold text-primary-foreground">
          Page not found
        </h1>
        <p className="mt-3 text-primary-foreground/60">
          That URL does not exist on this site.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-xl bg-saffron-gradient px-6 py-3 text-sm font-semibold text-accent-foreground"
        >
          Back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
