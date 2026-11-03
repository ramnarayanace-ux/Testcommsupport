interface CtaBandProps {
  onOpenBooking: () => void;
  onExploreTraining: () => void;
}

export default function CtaBand({ onOpenBooking, onExploreTraining }: CtaBandProps) {
  return (
    <section className="reveal py-10 lg:py-16 bg-[#FBFCFD]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-7">
        {/* Full-width gradient card (dark ink -> ink-3), 24px radius, 72px padding */}
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0A1628] via-[#111F38] to-[#1B2C4C] p-8 sm:p-14 lg:p-[72px] text-white text-center shadow-[0_24px_50px_rgba(10,22,40,0.25)] border border-white/10">
          {/* Subtle grid texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Two large orange radial glows in opposite corners (blurred) */}
          {/* Top-left glow */}
          <div
            className="absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none blur-[60px] opacity-75"
            style={{
              background: 'radial-gradient(circle, #FF6B35 0%, rgba(255, 107, 53, 0.3) 50%, transparent 80%)',
            }}
          />

          {/* Bottom-right glow */}
          <div
            className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none blur-[60px] opacity-75"
            style={{
              background: 'radial-gradient(circle, #FF8552 0%, rgba(255, 133, 82, 0.3) 50%, transparent 80%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-[680px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#FFA07A] text-[12px] font-semibold tracking-wider uppercase font-display mb-6 border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
              Zero Energization Delays
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-display tracking-[-0.03em] leading-[1.12] text-white mb-5">
              Ready to solve your next site issue?
            </h2>

            <p className="text-[16px] sm:text-[18px] text-[#A7B4C9] leading-relaxed mb-9">
              Join over 12,000 commissioning engineers from Siemens, ABB, and GE who rely on
              TestComm Pro to troubleshoot trips and commission faster.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Large Accent CTA with Arrow */}
              <button
                onClick={onOpenBooking}
                className="group px-8 py-4 rounded-[12px] bg-[#FF6B35] hover:bg-[#FF8552] text-white font-bold text-[16px] shadow-[0_6px_24px_rgba(255,107,53,0.4)] hover:shadow-[0_8px_32px_rgba(255,107,53,0.55)] transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <span>Book an Expert Now</span>
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <button
                onClick={onExploreTraining}
                className="px-7 py-4 rounded-[12px] border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-semibold text-[15px] transition-all duration-200"
              >
                Browse Course Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
