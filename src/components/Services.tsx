interface ServicesProps {
  onOpenBooking: () => void;
  onExploreTraining: () => void;
}

export default function Services({ onOpenBooking, onExploreTraining }: ServicesProps) {
  return (
    <section id="services" className="reveal py-[72px] lg:py-[110px] bg-[#FBFCFD]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-7">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1EB] text-[#FF6B35] text-[12px] font-semibold tracking-wider uppercase font-display mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
            Flexible Problem Solving
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.03em] font-display text-[#0A1628] leading-[1.15] mb-4">
            Two ways to get unstuck
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[#5B6B85] leading-relaxed">
            Resolve live energization trip blocks right now with real-time video diagnosis, or
            systematically train your on-site engineering team before site mobilization.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: On-Site Expert Consultation */}
          <div className="group relative bg-white border border-[#E6EAF2] rounded-[24px] p-8 sm:p-[44px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(10,22,40,0.12)] flex flex-col justify-between overflow-hidden">
            {/* Top border gradient that reveals on hover via scaleX(0 -> 1) */}
            <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#FF6B35] via-[#FF8552] to-[#FF6B35] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              {/* 56px rounded square icon with --accent-soft bg; rotates -5deg and inverts to accent bg + white icon */}
              <div className="w-14 h-14 rounded-[16px] bg-[#FFF1EB] text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white group-hover:-rotate-6 transition-all duration-300 flex items-center justify-center mb-7 shadow-xs">
                {/* Wrench / Spanner icon */}
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>

              {/* Title & Body */}
              <h3 className="text-[23px] font-bold font-display text-[#0A1628] mb-3 leading-snug">
                On-Site Expert Consultation
              </h3>
              <p className="text-[15px] text-[#5B6B85] leading-relaxed mb-8">
                Instant peer-to-peer diagnostic calls with certified protection and commissioning
                leads while you are standing in front of the switchgear or control panel.
              </p>

              {/* 4-Item Feature List with custom orange checkmark SVGs */}
              <div className="space-y-3.5 mb-10">
                {[
                  'Direct 1-on-1 video call with root-cause analysis',
                  'Real-time schematic, wiring & relay setting verification',
                  'Emergency on-call dispatch within 15 minutes',
                  'Official post-session summary & compliance memo',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FFF1EB] flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#FF6B35]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[14.5px] font-medium text-[#0A1628] leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Button */}
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 px-6 rounded-[12px] bg-[#0A1628] hover:bg-[#FF6B35] text-white font-semibold text-[14.5px] transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md"
            >
              <span>Book Expert Consultation</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
          </div>

          {/* Card 2: Testing & Commissioning Training */}
          <div className="group relative bg-white border border-[#E6EAF2] rounded-[24px] p-8 sm:p-[44px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(10,22,40,0.12)] flex flex-col justify-between overflow-hidden">
            {/* Top border gradient */}
            <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#FF6B35] via-[#FF8552] to-[#FF6B35] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              {/* 56px rounded square icon with graduation cap */}
              <div className="w-14 h-14 rounded-[16px] bg-[#FFF1EB] text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white group-hover:-rotate-6 transition-all duration-300 flex items-center justify-center mb-7 shadow-xs">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              {/* Title & Body */}
              <h3 className="text-[23px] font-bold font-display text-[#0A1628] mb-3 leading-snug">
                Testing & Commissioning Training
              </h3>
              <p className="text-[15px] text-[#5B6B85] leading-relaxed mb-8">
                Structured masterclasses with cloud relay simulators, wiring fault injections,
                and IEC 61850 protocol decoders to level up your team.
              </p>

              {/* 4-Item Feature List with custom orange checkmarks */}
              <div className="space-y-3.5 mb-10">
                {[
                  'Hands-on relay test simulator & injection sets',
                  'IEC 61850 GOOSE & MMS protocol masterclasses',
                  'Substation pre-commissioning standard checklists',
                  'CPD-certified completion credentials & badging',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FFF1EB] flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#FF6B35]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[14.5px] font-medium text-[#0A1628] leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Button */}
            <button
              onClick={onExploreTraining}
              className="w-full py-3.5 px-6 rounded-[12px] bg-[#0A1628] hover:bg-[#FF6B35] text-white font-semibold text-[14.5px] transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md"
            >
              <span>Explore Training Courses</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
          </div>
        </div>
      </div>
    </section>
  );
}
