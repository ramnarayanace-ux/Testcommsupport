import { COURSES, Course } from '../data/mockData';

interface TrainingProps {
  onEnroll: (course: Course) => void;
  currency: 'INR' | 'USD';
}

export default function Training({ onEnroll, currency }: TrainingProps) {
  return (
    <section id="training" className="reveal bg-[#F5F7FA] py-[72px] lg:py-[110px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-7">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1EB] text-[#FF6B35] text-[12px] font-semibold tracking-wider uppercase font-display mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
            Practical Engineering Academy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.03em] font-display text-[#0A1628] leading-[1.15] mb-4">
            Structured commissioning courses
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[#5B6B85] leading-relaxed">
            Eliminate trial-and-error on energized systems. Master relay logic, secondary
            injection, and digital substation protocols with hands-on cloud test benches.
          </p>
        </div>

        {/* 3-Column Grid of Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course: Course) => (
            <div
              key={course.id}
              className="group bg-white border border-[#E6EAF2] hover:border-transparent rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(10,22,40,0.12)] flex flex-col justify-between"
            >
              <div>
                {/* Thumb Area (150px): dark gradient + grid pattern overlay + orange radial glow in the corner */}
                <div className="relative h-[150px] w-full bg-gradient-to-br from-[#0A1628] via-[#111F38] to-[#1B2C4C] p-4 flex flex-col justify-between overflow-hidden">
                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                                        linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Orange radial glow in corner */}
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none blur-[28px] opacity-80"
                    style={{
                      background: 'radial-gradient(circle, #FF6B35 0%, rgba(255, 107, 53, 0.2) 60%, transparent 80%)',
                    }}
                  />

                  {/* Schematic vector lines decor */}
                  <div className="relative z-10 flex items-center justify-between text-white/40 font-mono text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                      MOD {course.modulesCount} UNITS
                    </span>
                    <span className="text-white/60">T&C LAB-SIM</span>
                  </div>

                  {/* Level Badge floating bottom-left: frosted glass pill */}
                  <div className="relative z-10 flex items-center">
                    <span className="glass-pill px-3 py-1 rounded-full text-white text-[11px] font-semibold tracking-wide uppercase font-display">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Course Body */}
                <div className="p-6">
                  {/* Course Title (17px) */}
                  <h3 className="text-[17px] font-bold text-[#0A1628] font-display leading-snug mb-2.5 group-hover:text-[#FF6B35] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-[13.5px] text-[#5B6B85] leading-relaxed mb-5 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Meta Row with clock SVG + duration/mode */}
                  <div className="flex items-center gap-2 text-[12.5px] text-[#5B6B85] pt-3 border-t border-[#E6EAF2]/80">
                    <svg
                      className="w-4 h-4 text-[#FF6B35] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="font-medium text-[#0A1628]">{course.duration}</span>
                    <span className="text-[#8B9AB3]">·</span>
                    <span className="truncate text-[#5B6B85]">{course.mode}</span>
                  </div>
                </div>
              </div>

              {/* Footer: price (display font, 20px) + small "One-time" label + Enroll button */}
              <div className="px-6 py-4.5 bg-[#FAFBFD] border-t border-[#E6EAF2] flex items-center justify-between">
                <div>
                  <div className="text-[20px] font-bold text-[#0A1628] font-display tracking-tight leading-none">
                    {currency === 'INR' ? `₹${course.priceINR.toLocaleString()}` : `$${course.priceUSD}`}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#8B9AB3] font-semibold">
                    One-time enrollment
                  </span>
                </div>

                <button
                  onClick={() => onEnroll(course)}
                  className="px-4.5 py-2 rounded-[10px] bg-[#0A1628] hover:bg-[#FF6B35] text-white text-[13px] font-semibold transition-all duration-200 shadow-xs hover:shadow-sm active:scale-95 flex items-center gap-1.5"
                >
                  <span>Enroll</span>
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
