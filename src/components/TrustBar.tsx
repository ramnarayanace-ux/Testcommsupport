import { TRUSTED_COMPANIES } from '../data/mockData';

export default function TrustBar() {
  return (
    <div className="reveal w-full bg-white border-y border-[#E6EAF2] py-6 sm:py-7">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-7">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8">
          {/* Left: uppercase letterspaced label */}
          <div className="shrink-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35]/60" />
            <span className="text-[11.5px] uppercase font-bold tracking-[0.14em] text-[#8B9AB3] font-display">
              Trusted by engineers at
            </span>
          </div>

          {/* Right: Logos text-only, #B8C2D1, display font, hover -> dark ink */}
          <div className="flex flex-wrap items-center justify-between sm:justify-start gap-6 sm:gap-10 md:gap-12">
            {TRUSTED_COMPANIES.map((company) => (
              <span
                key={company.name}
                title={company.note}
                className="text-[17px] sm:text-[19px] md:text-[20px] font-bold tracking-tight text-[#B8C2D1] hover:text-[#0A1628] font-display transition-colors duration-200 cursor-default select-none"
              >
                {company.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
