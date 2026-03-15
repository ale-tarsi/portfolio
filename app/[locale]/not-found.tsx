import Button from "@/components/ui/Button";

// This not-found doesn't know the locale, so we link to root /
// Middleware will redirect appropriately
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-narrow text-center py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-tertiary mb-5">
          404
        </p>
        <h1 className="font-display text-display-md text-ink text-balance mb-4">
          Page not found
        </h1>
        <p className="text-ink-secondary text-base leading-relaxed mb-10 max-w-[400px] mx-auto">
          This page doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="/" size="md">
            Go home
          </Button>
          <Button href="/projects" variant="outline" size="md">
            View projects
          </Button>
        </div>
      </div>
    </div>
  );
}
