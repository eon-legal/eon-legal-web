export function SectionSkeleton(): React.ReactElement {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-10">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-3 w-20 rounded-full bg-gradient-to-r from-muted to-background to-muted animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="h-10 w-3/4 rounded-lg bg-gradient-to-r from-muted to-background to-muted animate-pulse" />
              <div className="h-10 w-2/3 rounded-lg bg-gradient-to-r from-muted to-background to-muted animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-5 w-full rounded-lg bg-gradient-to-r from-muted to-background to-muted animate-pulse" />
              <div className="h-5 w-5/6 rounded-lg bg-gradient-to-r from-muted to-background to-muted animate-pulse" />
            </div>
          </div>

          {/* Content grid skeleton */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-square rounded-lg bg-gradient-to-r from-muted to-background to-muted animate-pulse" />
                <div className="space-y-2">
                  <div className="h-5 w-3/4 rounded-lg bg-gradient-to-r from-muted to-background to-muted animate-pulse" />
                  <div className="h-4 w-5/6 rounded-lg bg-gradient-to-r from-muted to-background to-muted animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
