export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-[#8B9AB3] border-t border-white/10 pt-16 lg:pt-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-7">
        {/* 4-Column Grid: Brand + 3 Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column (spans 2 on desktop) */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#111F38] to-[#1B2C4C] p-0.5 border border-white/20 flex items-center justify-center relative">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h4l3-8 4 16 3-8h4" />
                </svg>
                <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-white">
                TestComm<span className="text-[#FF6B35] font-extrabold ml-1">Pro</span>
              </span>
            </a>

            <p className="text-[14.5px] leading-relaxed text-[#8B9AB3] max-w-[360px] mb-6">
              The on-demand diagnostic bridge and continuing professional training platform for
              high-voltage testing and commissioning engineers worldwide.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#8B9AB3] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
              <span>Global Dispatch Network Active · 24/7 SLA</span>
            </div>
          </div>

          {/* Link Column 1: Services */}
          <div>
            <h4 className="text-[14px] font-bold uppercase tracking-wider text-white font-display mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {[
                { name: 'Live Video Diagnosis', href: '#services' },
                { name: 'Emergency T&C On-Call', href: '#services' },
                { name: 'Relay Setting File Review', href: '#experts' },
                { name: 'Secondary Injection Support', href: '#services' },
                { name: 'Substation Energization Sign-off', href: '#how-it-works' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#FF6B35] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link Column 2: Academies */}
          <div>
            <h4 className="text-[14px] font-bold uppercase tracking-wider text-white font-display mb-4">
              Training
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {[
                { name: 'IEC 61850 Masterclass', href: '#training' },
                { name: 'Differential Protection 87T', href: '#training' },
                { name: 'GIS 400kV Pre-Commissioning', href: '#training' },
                { name: 'SCADA Telemetry Protocols', href: '#training' },
                { name: 'CPD Accreditation & Badges', href: '#training' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#FF6B35] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link Column 3: Platform & Trust */}
          <div>
            <h4 className="text-[14px] font-bold uppercase tracking-wider text-white font-display mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {[
                { name: 'Expert Consultant Network', href: '#experts' },
                { name: 'Enterprise Retainers', href: '#services' },
                { name: 'ISO 9001 Quality Alignment', href: '#' },
                { name: 'Field Safety Protocols', href: '#' },
                { name: 'Contact Engineering Desk', href: 'mailto:support@testcommpro.com' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#FF6B35] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright left, 3 social icon buttons right */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B9AB3]">
          <div>
            © {new Date().getFullYear()} TestComm Pro Inc. All rights reserved. Industrial testing &
            commissioning support.
          </div>

          {/* 3 social icon buttons: LinkedIn, Twitter/X, YouTube as inline SVGs in 36px rounded squares */}
          <div className="flex items-center gap-2.5">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TestComm Pro on LinkedIn"
              className="w-9 h-9 rounded-[10px] bg-white/[0.05] hover:bg-[#FF6B35] text-white/70 hover:text-white transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TestComm Pro on X"
              className="w-9 h-9 rounded-[10px] bg-white/[0.05] hover:bg-[#FF6B35] text-white/70 hover:text-white transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TestComm Pro on YouTube"
              className="w-9 h-9 rounded-[10px] bg-white/[0.05] hover:bg-[#FF6B35] text-white/70 hover:text-white transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
