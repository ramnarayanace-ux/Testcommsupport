import { useState, useEffect } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [tab, setTab] = useState<'signin' | 'portal'>('signin');
  const [email, setEmail] = useState('');
  const [siteCode, setSiteCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoggedIn(true);
      onSuccess(email);
    }, 600);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      style={{
        backgroundColor: 'rgba(10, 22, 40, 0.75)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="relative w-full max-w-[460px] bg-white rounded-[20px] p-6 sm:p-8 shadow-2xl border border-[#E6EAF2] animate-modalIn my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-[10px] bg-[#F5F7FA] hover:bg-[#E6EAF2] text-[#5B6B85] hover:text-[#0A1628] flex items-center justify-center transition-colors"
        >
          <svg
            className="w-4.5 h-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!loggedIn ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFF1EB] text-[#FF6B35] text-[11px] font-bold tracking-wider uppercase font-display mb-2">
                Field Engineering Portal
              </div>
              <h3 className="text-[22px] font-bold font-display text-[#0A1628]">
                {tab === 'signin' ? 'Sign in to TestComm' : 'Access Project Site'}
              </h3>
              <p className="text-[13.5px] text-[#5B6B85] mt-1">
                Access past diagnostic recordings, relay setting files, and training certificates.
              </p>
            </div>

            {/* Tab switch */}
            <div className="grid grid-cols-2 p-1 bg-[#F5F7FA] border border-[#E6EAF2] rounded-[10px] mb-5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setTab('signin')}
                className={`py-1.5 rounded-[8px] transition-all ${
                  tab === 'signin' ? 'bg-white text-[#0A1628] shadow-xs' : 'text-[#5B6B85]'
                }`}
              >
                Individual Sign In
              </button>
              <button
                type="button"
                onClick={() => setTab('portal')}
                className={`py-1.5 rounded-[8px] transition-all ${
                  tab === 'portal' ? 'bg-white text-[#0A1628] shadow-xs' : 'text-[#5B6B85]'
                }`}
              >
                EPC Site Ticket Code
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {tab === 'signin' ? (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                      Engineer Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="engineer@siemens.com"
                      className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[14px] text-[#0A1628] transition-all input-focus-glow"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                      Access Token / Password
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[14px] text-[#0A1628] transition-all input-focus-glow"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                      Site Project Code
                    </label>
                    <input
                      type="text"
                      required
                      value={siteCode}
                      onChange={(e) => setSiteCode(e.target.value)}
                      placeholder="e.g. SUB-400KV-MAH-2026"
                      className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[14px] text-[#0A1628] transition-all input-focus-glow font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="site.lead@epc-contractor.com"
                      className="w-full px-3.5 py-2.5 rounded-[10px] bg-white border border-[#E6EAF2] text-[14px] text-[#0A1628] transition-all input-focus-glow"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-[12px] bg-[#0A1628] hover:bg-[#FF6B35] text-white font-bold text-[14.5px] transition-all duration-200 flex items-center justify-center gap-2 active:scale-98"
              >
                {loading ? 'Authenticating...' : 'Enter Engineer Console'}
              </button>

              <div className="text-center text-xs text-[#8B9AB3] pt-2">
                Need enterprise SSO or SAML setup?{' '}
                <a href="#services" onClick={onClose} className="text-[#FF6B35] underline font-semibold">
                  Contact Sales Desk
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <svg
                className="w-7 h-7"
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
            <h3 className="text-xl font-bold font-display text-[#0A1628] mb-1">
              Welcome back to TestComm Pro
            </h3>
            <p className="text-sm text-[#5B6B85] mb-6">
              Active sessions and downloaded relay parameter archives are ready.
            </p>
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-[10px] bg-[#0A1628] text-white text-sm font-semibold hover:bg-[#FF6B35] transition-colors"
            >
              Continue to Site Workspace
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
