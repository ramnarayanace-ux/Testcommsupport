import { UPCOMING_CONSULTATIONS } from '../data/mockData';

interface HeroProps {
  onOpenBooking: (expertName?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1628] to-[#0D1A30] pt-32 lg:pt-40 pb-[120px] text-white">
      {/* Layer 1: Subtle 56px grid pattern at 4% opacity masked with radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />

      {/* Layer 2: Large ambient radial glow of rgba(255,107,53,.18) blurred ~40px positioned top-right */}
      <div
        className="absolute -top-24 -right-24 w-[540px] h-[540px] rounded-full pointer-events-none blur-[70px] opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.22) 0%, rgba(255, 107, 53, 0.05) 50%, transparent 80%)',
        }}
      />

      {/* Secondary subtle glow in bottom left */}
      <div
        className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full pointer-events-none blur-[80px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(27, 44, 76, 0.8) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow: 24px orange line before it */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[2px] bg-[#FF6B35] rounded-full inline-block" />
              <span className="text-[13px] font-semibold tracking-wider uppercase text-[#FF8552] font-display">
                On-site Testing & Commissioning Support
              </span>
            </div>

            {/* H1 (clamp 38px -> 60px) */}
            <h1 className="text-[38px] sm:text-[46px] md:text-[54px] lg:text-[60px] font-bold leading-[1.08] tracking-[-0.03em] font-display text-white mb-6">
              Stuck on-site? Talk to a{' '}
              <span className="bg-gradient-to-r from-[#FF6B35] via-[#FF8552] to-[#FFA07A] bg-clip-text text-transparent">
                certified expert
              </span>{' '}
              in minutes.
            </h1>

            {/* Lead paragraph */}
            <p className="text-[17px] sm:text-[18px] text-[#A7B4C9] leading-[1.62] max-w-[520px] mb-8 font-normal">
              Direct live video and telemetry diagnosis for protection relays, GIS switchgear,
              SCADA telemetry, and turbine governors. Unblock energization without waiting days for
              vendor field dispatch.
            </p>

            {/* Two CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={() => onOpenBooking()}
                className="group px-7 py-3.5 rounded-[12px] bg-[#FF6B35] hover:bg-[#FF8552] text-white font-semibold text-[15px] shadow-[0_4px_20px_rgba(255,107,53,0.35)] hover:shadow-[0_6px_25px_rgba(255,107,53,0.45)] transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <span>Book a session</span>
                <svg
                  className="w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              {/* Outline Light CTA */}
              <a
                href="#training"
                className="px-6 py-3.5 rounded-[12px] border border-white/25 hover:border-white/60 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-[15px] transition-all duration-200 flex items-center justify-center"
              >
                Explore training
              </a>
            </div>

            {/* Stats row below: 3 stats separated by 1px vertical dividers */}
            <div className="grid grid-cols-3 items-center w-full max-w-[480px] pt-6 border-t border-white/10">
              {/* Stat 1 */}
              <div className="flex flex-col pr-4">
                <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight flex items-baseline">
                  250<span className="text-[#FF6B35] font-extrabold ml-0.5">+</span>
                </div>
                <div className="text-xs sm:text-sm text-[#8B9AB3] mt-0.5 font-medium">
                  Field Experts
                </div>
              </div>

              {/* Stat 2 with left border */}
              <div className="flex flex-col px-4 border-l border-white/15">
                <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight flex items-baseline">
                  12k<span className="text-[#FF6B35] font-extrabold ml-0.5">+</span>
                </div>
                <div className="text-xs sm:text-sm text-[#8B9AB3] mt-0.5 font-medium">
                  Sessions Solved
                </div>
              </div>

              {/* Stat 3 with left border */}
              <div className="flex flex-col pl-4 border-l border-white/15">
                <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight flex items-baseline">
                  4.9<span className="text-[#FF6B35] ml-0.5 text-xl font-normal">★</span>
                </div>
                <div className="text-xs sm:text-sm text-[#8B9AB3] mt-0.5 font-medium">
                  Site Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Glass Dashboard Mock */}
          <div className="lg:col-span-5">
            <div className="glass-card-hero rounded-[20px] p-5 sm:p-6 transition-all duration-300 hover:border-white/20">
              {/* Card Header: label + 3 decorative dots (first is accent) */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-semibold text-white tracking-tight font-display">
                    Upcoming consultations
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-[#8B9AB3]">
                    Site Dispatch
                  </span>
                </div>

                {/* 3 decorative dots */}
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35] shadow-[0_0_8px_rgba(255,107,53,0.8)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                </div>
              </div>

              {/* 3 rows showing fake appointments */}
              <div className="space-y-3">
                {UPCOMING_CONSULTATIONS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onOpenBooking(item.expertName)}
                    className="group/row flex items-center justify-between p-3.5 rounded-[14px] bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 transition-all duration-200 cursor-pointer hover:translate-x-1"
                  >
                    {/* Left: Avatar + Details */}
                    <div className="flex items-center gap-3 min-w-0 pr-3">
                      {/* Avatar: rounded square, gradient bg, initials in display font */}
                      <div
                        className={`w-10 h-10 rounded-[10px] bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-xs tracking-wider font-display shrink-0 shadow-sm`}
                      >
                        {item.initials}
                      </div>

                      <div className="min-w-0">
                        <div className="text-[14px] font-semibold text-white group-hover/row:text-[#FF8552] transition-colors truncate">
                          {item.expertName}
                        </div>
                        <div className="text-[11.5px] text-[#8B9AB3] truncate font-medium">
                          {item.specialty}
                        </div>
                      </div>
                    </div>

                    {/* Right: Status Pill */}
                    <div className="shrink-0">
                      {item.statusType === 'live' ? (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-medium">
                          {/* Pulsing dot */}
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                          <span>{item.timeLabel}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-[#FF8552] text-[11px] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                          <span>{item.timeLabel}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Action inside mock */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8B9AB3]">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#FF6B35]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  Avg response: 7 mins
                </span>
                <button
                  onClick={() => onOpenBooking()}
                  className="text-white hover:text-[#FF8552] font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Request Urgent Slot</span>
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
