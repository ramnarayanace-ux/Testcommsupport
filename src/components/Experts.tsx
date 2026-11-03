import { useState } from 'react';
import { EXPERTS, Expert } from '../data/mockData';

interface ExpertsProps {
  onOpenBooking: (expertName?: string) => void;
  currency: 'INR' | 'USD';
}

export default function Experts({ onOpenBooking, currency }: ExpertsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Specialists' },
    { id: 'relays', label: 'Protection Relays' },
    { id: 'gis', label: 'GIS & Switchgear' },
    { id: 'scada', label: 'SCADA & Automation' },
    { id: 'transformers', label: 'Power Transformers' },
  ];

  const filteredExperts =
    selectedCategory === 'all'
      ? EXPERTS
      : EXPERTS.filter((exp) => exp.category === selectedCategory);

  return (
    <section id="experts" className="reveal bg-white border-y border-[#E6EAF2] py-[72px] lg:py-[110px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-7">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1EB] text-[#FF6B35] text-[12px] font-semibold tracking-wider uppercase font-display mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
              Verified Commissioning Leads
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.03em] font-display text-[#0A1628] leading-[1.15]">
              Meet on-demand T&C experts
            </h2>
            <p className="text-[16px] text-[#5B6B85] mt-2 max-w-[560px]">
              Every consultant holds a minimum of 12 years field commissioning seniority across
              utilities, heavy industrial grids, and EPC projects.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F5F7FA] border border-[#E6EAF2] rounded-[14px]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-[10px] transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0A1628] text-white shadow-xs'
                    : 'text-[#5B6B85] hover:text-[#0A1628] hover:bg-white/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Grid of Expert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredExperts.map((expert: Expert) => (
            <div
              key={expert.id}
              className="group bg-white border border-[#E6EAF2] rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(10,22,40,0.08)] flex flex-col justify-between"
            >
              <div>
                {/* Header: 56px rounded square avatar with green online dot + Rating */}
                <div className="flex items-start justify-between mb-5">
                  <div className="relative">
                    {/* Avatar: 56px rounded square, gradient bg, initials in display font */}
                    <div
                      className={`w-14 h-14 rounded-[14px] bg-gradient-to-br ${expert.avatarGradient} flex items-center justify-center text-white font-bold text-base tracking-wider font-display shadow-sm`}
                    >
                      {expert.initials}
                    </div>

                    {/* Green online dot in bottom-right corner with white border */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                    </div>
                  </div>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-1.5 bg-[#F5F7FA] px-2.5 py-1 rounded-full border border-[#E6EAF2]">
                    <span className="text-[#FF6B35] text-xs">★</span>
                    <span className="text-xs font-bold text-[#0A1628] font-mono">
                      {expert.rating.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-[#8B9AB3]">
                      ({expert.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Name (16.5px bold) + Specialty (13px accent color) */}
                <h3 className="text-[16.5px] font-bold text-[#0A1628] font-display tracking-tight leading-snug mb-1">
                  {expert.name}
                </h3>
                <div className="text-[13px] font-semibold text-[#FF6B35] mb-2 leading-tight">
                  {expert.specialty}
                </div>

                {/* Active site / seniority note */}
                <div className="text-[12px] text-[#5B6B85] flex items-center gap-1.5 mb-5 font-medium">
                  <svg
                    className="w-3.5 h-3.5 text-[#8B9AB3]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>{expert.experienceYears} yrs exp</span>
                  <span className="text-[#E6EAF2]">·</span>
                  <span className="truncate">{expert.activeSite}</span>
                </div>

                {/* Tag row: 2-3 small pill tags with --bg-soft bg + --line border */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {expert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-[6px] text-[11.5px] font-medium bg-[#F5F7FA] border border-[#E6EAF2] text-[#5B6B85]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: rate on left, "Book now" button on right */}
              <div className="pt-4 border-t border-[#E6EAF2] flex items-center justify-between">
                <div>
                  <div className="text-[20px] font-bold text-[#0A1628] font-display tracking-tight leading-none">
                    {currency === 'INR' ? `₹${expert.rateINR.toLocaleString()}` : `$${expert.rateUSD}`}
                  </div>
                  <span className="text-[11.5px] text-[#8B9AB3] font-medium">/ 45-min session</span>
                </div>

                {/* "Book now" button (dark -> accent on hover) with small arrow SVG */}
                <button
                  onClick={() => onOpenBooking(expert.name)}
                  className="px-4 py-2 rounded-[10px] bg-[#0A1628] hover:bg-[#FF6B35] text-white text-[13px] font-semibold transition-all duration-200 flex items-center gap-1.5 group-hover:shadow-xs active:scale-95"
                >
                  <span>Book now</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
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
          ))}
        </div>
      </div>
    </section>
  );
}
