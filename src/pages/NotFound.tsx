import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import StorefrontLayout from "@/components/StorefrontLayout";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <StorefrontLayout>
      <Seo
        title="Not found"
        description="That URL does not exist on this site."
        path={location.pathname}
      />
      <div className="site-wrap flex flex-1 flex-col items-center justify-center py-28 text-center sm:py-32">
        <p className="eyebrow">404</p>
        <h1 className="font-heading mt-4 text-4xl font-medium text-foreground">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          That URL does not exist on this site.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-[13px] font-medium tracking-[-0.01em] text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Back home
        </Link>
      </div>
    </StorefrontLayout>
  );
};

export default NotFound;
