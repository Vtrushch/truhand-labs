export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-th-bg">
      {/* push content below fixed nav */}
      <div className="pt-[88px]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 pb-20">
          {children}
        </div>
      </div>
    </section>
  );
}
