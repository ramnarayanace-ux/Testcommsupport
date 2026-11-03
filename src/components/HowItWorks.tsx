export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Specify equipment & fault',
      desc: 'Pick your relay, switchgear, or SCADA unit and upload schematic clips, trip logs, or fault codes directly from your phone.',
    },
    {
      num: '2',
      title: 'Instant match with expert lead',
      desc: 'Get connected in under 15 minutes via low-bandwidth video with multi-camera support for wiring cabinets and live screen sharing.',
    },
    {
      num: '3',
      title: 'Solve trip & get sign-off memo',
      desc: 'Verify trip matrices, correct relay setting files, test interlocks, and receive an engineering memo for project handover.',
    },
  ];

  return (
    <section id="how-it-works" className="reveal py-[72px] lg:py-[110px] bg-[#FBFCFD]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-7">
        {/* Centered Heading */}
        <div className="text-center max-w-[640px] mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1EB] text-[#FF6B35] text-[12px] font-semibold tracking-wider uppercase font-display mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
            Fast Resolution Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.03em] font-display text-[#0A1628] leading-[1.15] mb-4">
            Get help in 3 simple steps
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[#5B6B85] leading-relaxed">
            From unexplained trip alarms to energization sign-off without costly project delays or
            waiting on overseas vendor engineers.
          </p>
        </div>

        {/* 3 Steps in a horizontal row with connecting line */}
        <div className="relative">
          {/* Connecting line behind steps: thin horizontal line with gradient fade at both ends (desktop only) */}
          <div
            className="hidden md:block absolute top-[36px] left-[15%] right-[15%] h-[2px] pointer-events-none z-0"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, #E6EAF2 20%, #FF6B35 50%, #E6EAF2 80%, transparent 100%)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group flex flex-col items-center text-center px-4 transition-transform duration-300"
              >
                {/* 72px circular number badge, white bg, 2px orange border, display font */}
                {/* Halo box shadow: 0 0 0 8px var(--bg), 0 8px 24px rgba(255,107,53,.2) */}
                {/* On hover: fills with accent color + scales 1.05 */}
                <div
                  className="w-[72px] h-[72px] rounded-full bg-white border-2 border-[#FF6B35] text-[#0A1628] group-hover:bg-[#FF6B35] group-hover:text-white font-bold text-2xl font-display flex items-center justify-center transition-all duration-300 group-hover:scale-105 mb-7 cursor-default"
                  style={{
                    boxShadow: '0 0 0 8px #FBFCFD, 0 8px 24px rgba(255, 107, 53, 0.22)',
                  }}
                >
                  {step.num}
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-bold font-display text-[#0A1628] mb-3 leading-snug group-hover:text-[#FF6B35] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[14.5px] text-[#5B6B85] leading-relaxed max-w-[320px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
