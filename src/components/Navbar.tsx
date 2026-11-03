import { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenBooking: (expertName?: string) => void;
  onOpenAuth: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
}

export default function Navbar({
  onOpenBooking,
  onOpenAuth,
  currency,
  onToggleCurrency,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Experts', href: '#experts' },
    { label: 'Training', href: '#training' },
    { label: 'How it works', href: '#how-it-works' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-[#E6EAF2] shadow-sm py-3.5'
          : 'glass-nav border-b border-transparent py-4.5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-7 flex items-center justify-between">
        {/* Brand Zone */}
        <a
          href="#"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] rounded-xl"
        >
          {/* Logo Mark: rounded square mark with gradient + inner highlight + glowing accent dot */}
          <div className="relative w-9.5 h-9.5 rounded-[10px] bg-gradient-to-br from-[#0A1628] via-[#111F38] to-[#1B2C4C] p-0.5 shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            {/* Inner highlight border */}
            <div className="w-full h-full rounded-[8px] border border-white/20 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white/10 to-transparent">
              {/* Technical crosshair / wave icon */}
              <svg
                className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#FF8552]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h4l3-8 4 16 3-8h4" />
              </svg>
              {/* Glowing accent dot in top right */}
              <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35]" />
            </div>
          </div>

          {/* Wordmark */}
          <div className="flex items-center text-xl font-bold tracking-tight text-[#0A1628] font-display">
            TestComm
            <span className="ml-1 text-[#FF6B35] font-extrabold">Pro</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14.5px] font-medium text-[#5B6B85] hover:text-[#0A1628] transition-colors duration-200 tracking-tight relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B35] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Zone */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Currency Switcher */}
          <button
            onClick={onToggleCurrency}
            title="Toggle pricing currency"
            className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-[#E6EAF2] bg-[#F5F7FA] text-[#5B6B85] hover:text-[#0A1628] hover:border-[#8B9AB3] transition-all duration-200"
          >
            <span className="text-[#8B9AB3]">Currency:</span>
            <span className="text-[#0A1628] font-bold">
              {currency === 'INR' ? '₹ INR' : '$ USD'}
            </span>
          </button>

          {/* Sign In (Ghost) */}
          <button
            onClick={onOpenAuth}
            className="px-4 py-2 text-[14px] font-semibold text-[#5B6B85] hover:text-[#0A1628] hover:bg-[#F5F7FA] rounded-[10px] transition-all duration-200"
          >
            Sign in
          </button>

          {/* Book Expert (Primary) */}
          <button
            onClick={() => onOpenBooking()}
            className="group px-4.5 py-2 text-[14px] font-semibold text-white bg-[#FF6B35] hover:bg-[#FF8552] rounded-[10px] transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 active:scale-[0.98]"
          >
            <span>Book Expert</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
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

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#FF6B35] rounded-lg shadow-sm"
          >
            Book
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-[#0A1628] hover:bg-[#F5F7FA] border border-[#E6EAF2] transition-colors"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#E6EAF2] px-6 py-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3 pb-4 border-b border-[#E6EAF2]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-[#0A1628] hover:text-[#FF6B35] py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <div className="flex items-center justify-between text-xs text-[#5B6B85] px-1">
              <span>Selected Currency</span>
              <button
                onClick={onToggleCurrency}
                className="font-bold text-[#0A1628] underline underline-offset-2"
              >
                {currency === 'INR' ? '₹ INR (Indian Rupee)' : '$ USD (US Dollar)'}
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-[#0A1628] border border-[#E6EAF2] rounded-[10px] hover:bg-[#F5F7FA]"
            >
              Sign in to Portal
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#FF6B35] rounded-[10px] shadow-sm flex items-center justify-center gap-2"
            >
              <span>Book Expert Consultation</span>
              <svg
                className="w-4 h-4"
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
      )}
    </header>
  );
}
